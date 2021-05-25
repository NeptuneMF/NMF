import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Adapter extends PayloadManager {
  //internal
  layerType: string = "Adapter";

  //use in the childrens
  name: string = "Adapter";
  adapterType: string = "Adapter";
  toAdapterLayer: any;

  //optional for reuse other adapter
  adapterName: string;
  adapter: any;

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
  async use(payload: Payload, toAdapter: string, adapterName?: string): Promise<Payload> {
    const newPayload: Payload = new Payload()

    if (adapterName || this.adapterName) {
      this.adapter = this.entity.getAdapter(adapterName || this.adapterName)
      newPayload.setBody(this.adapter.use(payload).body, this.name)
    }
    else {
      newPayload.setBody(payload.body, this.name)
    }
    this.toAdapterLayer = this.entity.getLayer(toAdapter, this.adapterType)
    this.payload = newPayload

    return this.process()
  }
}