import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Infrastructure extends PayloadManager {
  layerType: string = "Infrastructure"
  name: string = "Infrastructure"
  adapterName: string = "Adapter";
  group: string = "mongo"

  /**
   * Uses infrastructure
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
      "msg": "infrstructure!"
    })

    return this.payload
  }
}