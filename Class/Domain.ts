import { Payload } from './Payload'
import PayloadManager from './Payload'

export default class Domain extends PayloadManager {
  layerType: string = "Domain";
  name: string = "Domain";
  adapterName: string = "Adapter";
  adapter: any;
  /**
   * Uses domain
   * @param payload 
   * @param [adapterName] 
   * @returns  
   */
  use(payload: Payload, adapterName?: string) {
    const newPayload: Payload = new Payload()

    this.adapter = this.entity.getAdapter(adapterName || this.adapterName)
    newPayload.setBody(this.adapter.use(payload).body, this.name)
    this.payload = newPayload

    return this.process()
  }

}