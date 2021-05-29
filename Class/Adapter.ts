import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Adapter extends PayloadManager {
  //internal
  layerType: string = "Adapter";
  layerToUse;

  //use in the childrens
  name: string = "Adapter";
  layer: string = "Domain";
  group: string = "Creation";
  handler: string = "Domain";

  /**
   * Uses adapter 
   * 
   * implement a easy form to use adapter and abstract
   * 
   * @param payload 
   * @param toAdapter 
   * @param [adapterName] 
   * @returns use 
   */
  async use(payload: Payload): Promise<Payload> {
    const newPayload: Payload = new Payload()
    this.payload = newPayload
    this.getLayer()
    this.process()
    return await this.layerToUse.use(this.payload)
  }

  async getLayer() {
    this.layerToUse = this.entity.getLayers()[this.layer][this.group][this.handler]
  }
}