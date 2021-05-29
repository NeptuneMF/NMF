import PayloadManager from './Payload'
import { Payload } from './Payload'

export default class Infrastructure extends PayloadManager {
  //internal
  layerType: string = "Infrastructure"

  //use in childrens
  name: string = "Infrastructure"
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

  /**
   * Process infrastructure
   * @returns  
   */
  async process() {
    this.payload.commitBody({
      "msg": "infrstructure!"
    })

    return this.payload
  }
}