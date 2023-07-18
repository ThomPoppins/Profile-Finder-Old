import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    profile: {
        slogan: String,
        profileimage: String,
    }
})

const Users = models.user || model('user', userSchema);

export default Users;