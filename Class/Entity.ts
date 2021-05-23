import Adapter from './Adapter';
import Infrastructure from './Infrastructure';
import Domain from './Domain';
import Application from './Application';
import PayloadManager from './Payload';

interface EntityInterface {
  layerType: string;
  Infrastructurs: { [key: string]: Infrastructure };
  adapters: { [key: string]: Adapter };
  domains: { [key: string]: Domain };
  applications: { [key: string]: Application };
  getLayersOfOtherEntity: (entity: Entity) => void;
  register: (registable: PayloadManager) => void;
  getAdapter: (string) => any;
  getLayers: () => object;
}

export default class Entity implements EntityInterface {
  layerType: string = "Entity"
  name: string = "Entity";
  Infrastructurs: { [key: string]: Infrastructure } = {};
  adapters: { [key: string]: Adapter } = {};
  domains: { [key: string]: Domain } = {};
  applications: { [key: string]: Application } = {};

  getLayersOfOtherEntity(entity: Entity) {
    Object.values(entity.Infrastructurs).forEach(layer => this.register(layer))
    Object.values(entity.adapters).forEach(layer => this.register(layer))
    Object.values(entity.domains).forEach(layer => this.register(layer))
    Object.values(entity.applications).forEach(layer => this.register(layer))
  }

  register(registable: any): void {
    if ('layerType' in registable) {
      if (registable.layerType == "Infrastructure") this.Infrastructurs[registable.name] = (registable); registable.setEntity(this);
      if (registable.layerType == "Adapter") this.adapters[registable.name] = (registable)
      if (registable.layerType == "Domain") this.domains[registable.name] = (registable)
      if (registable.layerType == "Application") this.applications[registable.layerType] = (registable)
      if (registable.layerType == "Entity") this.getLayersOfOtherEntity(registable)
    }
    else throw new Error("This is no compatible obj")
  }

  getAdapter(string) {
    if (string in Object.keys(this.adapters)) return this.adapters[string]
    else throw new Error("Not exist that adapter.")
  }

  getLayers() {
    return {
      Infrastructurs: this.Infrastructurs,
      adapters: this.adapters,
      domains: this.domains,
      applications: this.applications
    }
  }
}