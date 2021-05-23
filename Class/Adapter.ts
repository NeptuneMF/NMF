import PayloadManager from './Payload'
import { Payload } from './Payload'


export default class Adapter extends PayloadManager {
  layerType: string = "Adapter";
  name: string = "Adapter";
  adapterName: string;
  adapter: any;

  use(payload: Payload, adapterName?: string) {
    const newPayload: Payload = new Payload()

    if (adapterName || this.adapterName) {
      this.adapter = this.entity.getAdapter(adapterName || this.adapterName)
      newPayload.setBody(this.adapter.use(payload).body, this.name)
    }
    else {
      newPayload.setBody(payload.body, this.name)
    }

    this.payload = newPayload

    return this.process()
  }
}