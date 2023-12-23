import NextAuth from "next-auth/next";
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/lib/database";
import User from "@/models/User";
const bcrypt = require("bcrypt");

interface AuthOptions {
  providers: any[]; // You can specify a more specific type here if needed
  session: {
    strategy: SessionStrategy | undefined; // Use SessionStrategy enum type
    maxAge: number;
  };
  secret: string | undefined;
  pages: {
    signIn: string;
  };
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(
        credentials: Record<string | string, string> | undefined
      ) {
        const email = credentials?.email ?? "";
        const password = credentials?.password ?? "";

        try {
          await connectToDb();
          const user = await User.findOne({ email });

          const isPasswordOk =
            user && bcrypt.compareSync(password, user.password);

          if (!user) {
            return null;
          }

          if (isPasswordOk) {
            return user;
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use the appropriate session strategy enum value
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET || "",
  pages: {
    signIn: "/", // Customize the sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
