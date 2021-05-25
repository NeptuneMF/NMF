import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  surname: String,
  lastname: String,
  dni: String,
});

export interface IUser {
  surname: string;
  lastname: string;
  dni: string;
}

export const UserMongo = mongoose.model("user", UserSchema);
