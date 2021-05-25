import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Adapter extends PayloadManager {
  //internal
  layerType: string = "Adapter";

  //use in the childrens
  name: string = "Adapter";
  layer: string = "Infrastructure";
  group: string = "DB";
  handler: string = "Infrastructure";
  layerToUse;

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
    if (this.layer == "Infrastructure") this.layerToUse = this.entity.getLayers()[this.layer]["mongo"][this.handler]
  }
}