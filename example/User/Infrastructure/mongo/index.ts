import Infrastructure from '../../../../Class/Infrastructure'
import { UserMongo } from '../../Schemas'

export default class create extends Infrastructure {
  name: string = "createUser";
  adapterName: string = "createUser";
  group: string = "DB";

  async process() {

    const user = await UserMongo.create(this.payload.body);

    this.payload.commitBody({
      msg: "user has been created",
      id: user._id,
    });

    return this.payload

  }
}