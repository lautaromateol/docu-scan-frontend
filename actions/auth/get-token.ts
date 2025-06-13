"use server"
import { cookies } from "next/headers"

export async function getToken() {
  const cookiesStore = await cookies()

  const token = cookiesStore.get("token")

  return token?.value.slice(1, -1)
}