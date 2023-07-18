import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from '../../../model/schema'
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(error => { error: "Connection Failed...!" })
        // check user existance
        const result = await Users.findOne({ email: credentials.email })
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!")
        }
        // compare() password hash with hashed password input
        const checkPassword = await compare(credentials.password, result.password);
        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }
        return result;
      }
    }),
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
  ],
  secret: "hOd7poRyIkGBnkQ5IZvrnbDJ8D8/FRC6nEzzQpkH9ko="
})