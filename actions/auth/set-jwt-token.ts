"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function setJwtToken(token: string) {
  const SECRET = process.env.JWT_SECRET!;

  try {
    const payload = jwt.verify(token, SECRET);

    const exp = payload.exp;
    const expiresDate = new Date(exp * 1000);

    const cookiesStore = await cookies();
    cookiesStore.set({
      name: "token",
      value: JSON.stringify(token),
      httpOnly: true,
      expires: expiresDate,
    });
  } catch (error) {
    throw new Error("There was an error signing in.");
  }
}
