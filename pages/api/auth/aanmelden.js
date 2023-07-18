
import connectMongo from '../../../database/conn';
import Users from '../../../model/schema.js'
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({ error: "Connection Failed...!" }))

  // only post method is accepted
  if (req.method === 'POST') {

    if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });
    const { firstname, lastname, username, email, password } = req.body;

    // initialize default profile configuration variables
    const slogan = "We are the best!";
    const profileimage = "";

    // check duplicate users
    const checkexisting = await Users.findOne({ email });
    if (checkexisting) return res.status(422).json({ message: "User Already Exists...!" });


    Users.create({
      firstname,
      lastname,
      username,
      email,
      password: await hash(password, 12), // hash password
      profile: {
        slogan,
        profileimage,
      },
    })
    res.status(200).json({
      user: {
        firstname,
        lastname,
        username,
        email
      },
      message: "Account created"
    })

  } else {
    res.status(500).json({ message: "HTTP method not valid only POST Accepted" })
  }

}