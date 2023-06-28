import { Schema } from "mongoose";

const userSchema = new Schema({
  gebruikersnaam: String,
  email: String,
  password: String,
})

const Users = models.user || model('user', userSchema)

export default Users;