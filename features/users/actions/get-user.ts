"use server"
import { getToken } from "@/actions/auth/get-token"
import { API_URL } from "@/lib/constants"
import { User } from "../types";

export async function getUser(): Promise<User> {
  const { token, user } = await getToken()

  const response = await fetch(`${API_URL}/users/get-user`, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
    next: {
      tags: [`user-${user.id}`]
    }
  })

  const data = await response.json()

  return data
}