import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Infrastructure extends PayloadManager {
  layerType: string = "Infrastructure"
  name: string = "Infrastructure"
  adapterName: string = "Adapter";
  adapter: any;

  /**
   * Uses infrastructure
   * @param payload 
   * @param [adapterName] 
   * @returns  
   */
  async use(payload: Payload, adapterName?: string) {
    const newPayload: Payload = new Payload()

    this.adapter = this.entity.getAdapter(adapterName || this.adapterName)
    newPayload.setBody(this.adapter.use(payload).body, this.name)
    this.payload = newPayload

    return await this.process()
  }
}