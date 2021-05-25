import Adapter from './Adapter';
import Infrastructure from './Infrastructure';
import Domain from './Domain';
import Application from './Application';
import PayloadManager from './Payload';

interface EntityInterface {
  layerType: string;
  layers: { [key: string]: Infrastructure | Adapter | Domain | Application };
  getLayersOfOtherEntity: (entity: Entity) => void;
  register: (registable: PayloadManager) => void;
  getAdapter: (string) => any;
  getLayers: () => object;
}

export default class Entity implements EntityInterface {

  layerType: string = "Entity"
  name: string = "Entity";
  layers: { [key: string]: Infrastructure | Adapter | Domain | Application } = {};

  /**
   * Gets layers of other entity
   * @param entity 
   */
  getLayersOfOtherEntity(entity: Entity) {
    Object.values(entity.layers).forEach(layers => Object.values(layers).forEach(layer => this.register(layer)))
  }

  /**
   * Gets layer
   * @param toAdapter 
   * @param adapterType 
   * @returns layer 
   */
  getLayer(toAdapter, adapterType): Infrastructure | Application | Adapter | Domain {
    return this.layers[adapterType][toAdapter]
  }

  /**
   * Registers entity
   * @param registable 
   */
  register(registable: any): void {
    if ('layerType' in registable) {
      if (registable.layerType == "Entity") this.getLayersOfOtherEntity(registable)
      else this.layers[registable.layerType][registable.name] = registable; registable.setEntity(this);
    }
    else throw new Error("This is no compatible obj")
  }

  /**
   * Gets adapter
   * @param adapterName 
   * @returns  
   */
  getAdapter(adapterName: string) {
    if (adapterName in Object.keys(this.layers["Adapter"])) return this.layers["Adapter"][adapterName]
    else throw new Error("Not exist that adapter.")
  }

  /**
   * Gets layers
   * @returns  
   */
  getLayers() {
    return this.layers
  }
}