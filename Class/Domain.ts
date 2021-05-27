import { Payload } from './Payload'
import PayloadManager from './Payload'

export default class Domain extends PayloadManager {
  layerType: string = "Domain";
  name: string = "Domain";
  adapterName: string = "Adapter";
  group: string = "Creation"

  /**
   * Uses domain
   * @param payload 
   * @param [adapterName] 
   * @returns  
   */
  async use(payload: Payload) {
    this.payload = payload
    return await this.process()
  }


  async process() {
    this.payload.commitBody({
      "msg": "body!"
    })

    return this.payload
  }

}