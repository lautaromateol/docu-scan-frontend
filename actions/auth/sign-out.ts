"use server"
import { cookies } from "next/headers"

export async function signOut() {
  try {
    const cookiesStore = await cookies()
    cookiesStore.delete("user")
    cookiesStore.delete("token")

    return {
      statusCode: 200
    }
  } catch (error) {
    return {
      statusCode: 500
    }
  }
}