import Adapter from './Adapter';
import Infrastructure from './Infrastructure';
import Domain from './Domain';
import PayloadManager from './Payload';

interface EntityInterface {
  layerType: string;
  layers: object;
  getLayersOfOtherEntity: (entity: Entity) => void;
  register: (registable: PayloadManager) => void;
  getLayers: () => object;
}

export default class Entity implements EntityInterface {
  //internal
  layerType: string = "Entity"
  layers: object = {};

  //use in the childrens
  name: string = "Entity";

  /**
   * Gets layers of other entity
   * @param entity 
   */
  getLayersOfOtherEntity(entity: Entity) {
    Object.values(entity.layers).forEach(layers => Object.values(layers).forEach(layer => this.register(layer)))
  }

  /**
   * Registers entity
   * @param registable 
   */
  register(registable: any): void {
    if ('layerType' in registable) {
      switch (registable.layerType) {
        case 'Entity':
          this.getLayersOfOtherEntity(registable)
          break
        case 'Adapter':
          if (typeof this.layers[registable.layerType] != 'object') this.layers[registable.layerType] = {};
          this.layers[registable.layerType][registable.name] = registable;
          registable.setEntity(this);
          break;
        case 'Domain':
        case 'Infrastructure':
          if (typeof this.layers[registable.layerType] != 'object') this.layers[registable.layerType] = {};
          if (typeof this.layers[registable.layerType][registable.group] != 'object') this.layers[registable.layerType][registable.group] = {};
          this.layers[registable.layerType][registable.group][registable.name] = registable;
          registable.setEntity(this);
          break;
      }
    }
    else throw new Error("This is no compatible obj")
  }

  /**
   * Gets adapter
   * @param adpterName 
   * @returns  
   */
  getAdapter(adpterName: string) {
    return this.layers["Adapter"][adpterName]
  }

  /**
   * Gets layers
   * @returns  
   */
  getLayers() {
    return this.layers
  }
}