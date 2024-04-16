import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google"
import { db } from "@/db";
// import { Provider } from "next-auth/providers/index";

const handler = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
