"use server"
import { getToken } from "@/actions/auth/get-token"
import { API_URL } from "@/lib/constants"
import { User } from "../types";

export async function getUser(): Promise<User | null> {
  const payload = await getToken()

  if(!payload) return null

  const response = await fetch(`${API_URL}/users/get-user`, {
    headers: {
      "Authorization": `Bearer ${payload.token}`
    },
    next: {
      tags: [`user-${payload.user.id}`]
    }
  })

  const data = await response.json()

  return data
}