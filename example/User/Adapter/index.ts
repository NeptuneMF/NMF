import Adapter from '../../../Class/Adapter'
import { IUser } from '../Schemas'

export default class createUser extends Adapter {
  name: string = "createUser";
  adapterType: string = "Infrastructure";
  toAdapter: any;

  async process() {
    let user: IUser = this.payload.body
    this.payload.commitBody(user)

    return this.payload
  }
}
