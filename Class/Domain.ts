import Payload from './Payload'

interface DomainInterface {
  name: string;
  description: string;
  process: (payload: Payload) => Payload;
}

export default class Domain implements DomainInterface {
  name: string = "Domain";
  description: string = "Domain example";

  process(payload: Payload) {
    const newPayload: Payload = new Payload()

    newPayload.setBody(payload.body, this.name)

    return newPayload
  }

}
