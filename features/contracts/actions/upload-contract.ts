"use server";

import { API_URL } from "@/lib/constants";

export async function uploadContract(file: File) {

  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch(`${API_URL}/contracts`, {
    method: "POST",
    body: formData
  })

  const data = await response.json()

  return data;
}
