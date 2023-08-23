import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
  
  providers: [
    
    CredentialsProvider({
        name: "Credentials",
        
        credentials: {
          email: { label: "Email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
         
          const { email, password } = credentials as any;

          const response = await fetch('http://localhost:3000/auth/client/authenticate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          })
          const {client: user} = await response.json()

          if(response.ok && user) {
            return user;
          } else return null
        }
    })
  ],

  session:{
    strategy:"jwt"
  },
  
  pages:{
    signIn:'/auth/login'
  },

  callbacks:{
    async jwt({token, user}) {
      return {...token, ...user}
    },

    async session({ session, token, user}){
      session.user = token as any;
      return session
    },
  }



}

export default NextAuth(authOptions)