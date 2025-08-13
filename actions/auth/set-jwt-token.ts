"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

interface token extends JwtPayload {
  exp: number;
  email: string
}

export async function setJwtToken(token: string) {
  const SECRET = process.env.JWT_SECRET!;

  try {
    const payload = jwt.verify(token, SECRET) as token;

    const exp = payload.exp;
    const expiresDate = new Date(exp * 1000);

    const cookiesStore = await cookies();
    cookiesStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      expires: expiresDate,
    });

    const user = {
      id: payload.sub,
      email: payload.email
    }

    cookiesStore.set({
      name: "user",
      value: JSON.stringify(user),
      httpOnly: true,
      expires: expiresDate
    })
  } catch (error) {
    throw new Error("There was an error signing in.");
  }
}
