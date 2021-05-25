import Entity from "./Entity";

/**
 * Ipayload
 */
interface IPayload {
  trace: string[];
  from: string;
  body: object | object[];

  setBody: (body: object | object[], newFrom) => void;
}

/**
 * Ipayload manager
 */
export interface IPayloadManager {
  name: string;
  payload: Payload;
  layerType: string
  use: (payload: Payload | Promise<Payload>, toAdapter?: string, adapterName?: string) => Promise<Payload>;
  process: (payload: Payload | Promise<Payload>) => Payload | Promise<Payload>;
}

/**
 * Payload
 */
export class Payload implements IPayload {

  trace: string[];
  from: string;
  body: object | object[];

  /**
   * Commits body
   * @param body 
   */
  commitBody(body: object | object[]) {
    this.body = body;
  }

  /**
   * Sets body
   * @param body 
   * @param newFrom 
   */
  setBody(body: object | object[], newFrom: string) {
    if (this.from) this.trace.push(this.from)
    this.from = newFrom
    this.body = body
  }

}


export default abstract class PayloadManager implements IPayloadManager {
  name: string = "manager";
  payload: Payload;
  layerType: string = "PayloadManager"
  entity: Entity;

  /**
   * Sets entity
   * @param entity 
   */
  setEntity(entity: Entity) {
    this.entity = entity
  }

  /**
   * Gets entity
   * @returns  
   */
  getEntity() {
    return this.entity
  }

  /**
   * Uses payload manager
   * @param payload 
   * @param [toAdapter] 
   * @param [adapterName] 
   * @returns  
   */
  async use(payload: Payload, toAdapter?: string, adapterName?: string) {
    const newPayload: Payload = new Payload()

    newPayload.setBody(payload.body, this.name)
    this.payload = newPayload

    return this.process()
  }

  /**
   * Process payload manager
   * @returns  
   */
  async process() {
    return this.payload
  }

}