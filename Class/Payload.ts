import Entity from "./Entity";

interface PayloadInterface {
  trace: string[];
  from: string;
  body: object | object[];

  setBody: (body: object | object[], newFrom) => void;
}

interface PayloadManagerInterface {
  name: string;
  payload: Payload;
  layerType: string
  use: (payload: Payload) => Payload;
  process: (payload: Payload) => Payload;
}


export class Payload implements PayloadInterface {

  trace: string[];
  from: string;
  body: object | object[];

  setBody(body: object | object[], newFrom: string) {
    if (this.from) this.trace.push(this.from)
    this.from = newFrom
    this.body = body
  }

}


export default class PayloadManager implements PayloadManagerInterface {
  name: string = "manager";
  payload: Payload;
  layerType: string = "PayloadManager"
  entity: Entity;

  setEntity(entity: Entity) {
    this.entity = entity
  }

  getEntity() {
    return this.entity
  }

  use(payload: Payload) {
    const newPayload: Payload = new Payload()

    newPayload.setBody(payload.body, this.name)
    this.payload = newPayload

    return this.process()
  }

  process() {
    return this.payload
  }

}