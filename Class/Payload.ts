interface PayloadInterface {
  trace: string[];
  from: string;
  body: object | object[];

  setBody: (body: object | object[], newFrom) => void;
}

export default class Payload implements PayloadInterface {

  trace: string[];
  from: string;
  body: object | object[];

  setBody(body: object | object[], newFrom: string) {
    if (this.from) this.trace.push(this.from)
    this.from = newFrom
    this.body = body
  }

}
