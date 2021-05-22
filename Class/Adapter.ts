import Payload from './Payload'

interface AdapterInterface {
  name: string;
  description: string;
  adapter: (Payload?: Payload) => Payload;
}

export default class Adapter implements AdapterInterface {
  name: string = "Adapter";
  description: string = "Adapter is a connection both infrastructure and domain";

  adapter(payload: Payload) {
    const newPayload: Payload = new Payload()

    newPayload.setBody(payload.body, this.name)

    return newPayload
  }
}