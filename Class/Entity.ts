import Adapter from './Adapter';
import Infrastructure from './Infrastructure';
import Domain from './Domain';
import Application from './Application';
import PayloadManager from './Payload';

interface EntityInterface {
  layerType: string;
  infrastructures: Infrastructure[];
  adapteres: Adapter[];
  domains: Domain[];
  applications: Application[];
  getLayersOfOtherEntity: (entity: Entity) => void;
  register: (registable: PayloadManager) => void;
}

export default class Entity implements EntityInterface {
  layerType: string = "Entity"
  infrastructures: Infrastructure[] = [];
  adapteres: Adapter[] = [];
  domains: Domain[] = [];
  applications: Application[] = [];

  getLayersOfOtherEntity(entity: Entity) {
    entity.infrastructures.forEach(layer => this.register(layer))
    entity.adapteres.forEach(layer => this.register(layer))
    entity.domains.forEach(layer => this.register(layer))
    entity.applications.forEach(layer => this.register(layer))
  }

  register(registable: any): void {
    if ('layerType' in registable) {
      if (registable.layerType == "Infrastructure") this.infrastructures.push(registable)
      if (registable.layerType == "Adapter") this.adapteres.push(registable)
      if (registable.layerType == "Domain") this.domains.push(registable)
      if (registable.layerType == "Application") this.applications.push(registable)
      if (registable.layerType == "Entity") this.getLayersOfOtherEntity(registable)
    }
    else throw new Error("This is no compatible obj")
  }

  getLayers() {
    return {
      infrastructures: this.infrastructures,
      adapteres: this.adapteres,
      domains: this.domains,
      applications: this.applications
    }
  }
}