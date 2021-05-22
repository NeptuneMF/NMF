import Payload from './Payload'

interface InfrastructureInterface {
  name: string;
  description: string;
  process: (payload: Payload) => Payload;
}

export default class Infrastructure implements InfrastructureInterface {
  name: string = "Domain";
  description: string = "Domain example";

  process(payload: Payload) {
    const newPayload: Payload = new Payload()

    newPayload.setBody(payload.body, this.name)

    return newPayload
  }

}
