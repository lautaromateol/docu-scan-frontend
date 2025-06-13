"use server"
import { cookies } from "next/headers"

export async function getToken() {
  const cookiesStore = await cookies()

  const token = cookiesStore.get("token")
  const user = cookiesStore.get("user")

  return { token: token?.value, user: JSON.parse(user?.value!) }
}