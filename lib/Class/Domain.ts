import { Payload } from './Payload'
import PayloadManager from './Payload'

export default class Domain extends PayloadManager {
  //internal
  layerType: string = "Domain";

  //use in the childrens
  name: string = "Domain";
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

  /**
   * Process domain
   * @returns  
   */
  async process() {
    this.payload.commitBody({
      "msg": "body!"
    })

    return this.payload
  }

}