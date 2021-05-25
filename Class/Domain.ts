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
  async use(payload: Payload) {
    return this.process()
  }

}