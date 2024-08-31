import { User } from "next-auth";


export type SafeUser = Omit<
  User,
  "createdAt" | "updateAt" | "emailVerified"
> & {
  createdAt: Date;
  updatedAt: Date | null;
  emailVerified: Date | null;
};