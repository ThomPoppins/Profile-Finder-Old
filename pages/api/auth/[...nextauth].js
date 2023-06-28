import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import FacebookProvider from "next-auth/providers/facebook"
import { CredentialsProvider } from "next-auth/providers/credentials";
import ConnectMongo from '../../../database/conn'
import connectMongo from "../../../database/conn";
import Users from '../../../model/schema'
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),

    // // Credentials Provider
    // CredentialsProvider({
    //   name: "Credentials",
    //   // async authorize function declared to authorize useraccounts saved in MongoDB 'users' collection
    //   // authorize() has 2 arguments a credentials parameter with the user credentials data when a user logs in
    //   // the users POST's that data to this API end-point.
    //   // second parameter is the request parameter.
    //   async authorize(credentials, req) {
    //     // connectMongo to connect to MongoDB, catch failed connection error.
    //     connectMongo().catch(error => { error: "Connection failed...!"})

    //     // check user existence by searching the database 'users' collection matching the email credential value
    //     const result = await Users.findOne({ email: credentials.email })
    //     // if no result comes back, no useraccount with that provided mailadres exists, so ask user to Sign Up
    //     if(!result) {
    //       throw new Error("No user Found with your email, please sign up and create an account!")
    //     }

    //     // compare() 
    //     const checkPassword = await compare(credentials.password, result.password)

    //     // incorrect password, throw error that login credentials are incorrect
    //     if(!checkPassword || result.email !== credentials.email){
    //       throw new Error("Username or password doesn't match");
    //     }

    //   // return the user that's logging in, from 'users' collection in database
    //   // OR returns {!result} (false, null or undefined)
    //     return result;
    //   }

    // }),
    // Google Provider (OAuth)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // Github Provider (OAuth)
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // Facebook Provider (OAuth)
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
  ]
})