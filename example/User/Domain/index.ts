import Domain from '../../../Class/Domain'
import { IUser } from '../Schemas'

export default class createUser extends Domain {
  name: string = "createUser";
  adapterName: string = "createUser";

  async process() {
    let user: IUser = this.payload.body
    this.payload.commitBody(user)

    return this.payload
  }
}
