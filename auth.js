import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./database/mongoClientPromise";
import { userModel } from "./models/user-model";
export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, {
        databaseName: process.env.ENVIRONMENT,
    }),
    session: {
        strategy: "jwt",
    },

    providers: [
        CredentialsProvider({
            credentials: {
                emails: {},
                password: {},
            },

            //logic before authorization...

            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await userModel.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password mismatch");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});
