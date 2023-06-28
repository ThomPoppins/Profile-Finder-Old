import connectMongo from '../../../database/conn';
import Users from '../../../model/schema'

export default async function handler(req, res) {
  connectMongo().catch(error => res.json({ error: "Verbinding mislukt...!" }))

  // only post method is accepted
  if (req.method === 'POST') {

    if(!req.body) return res.status(404).json({ error: "Don't have form data." })
    const { gebruikersnaam, email, password } = req.body;

    //check duplicate users
    const checkExisting = await Users.find.findOne({ email })
    if(checkExisting) return res.status(422).json({ message: "Gebruiker heeft al een account."})

    //


  } else {
    res.status(500).json({ message: "HTTP method not valid, only POST accepted." })
  }
}