"use server";
import { getToken } from "@/actions/auth/get-token";
import { CreateWorkspace } from "../types";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function createWorkspace(workspace: CreateWorkspace) {
  const { token, user } = await getToken();

  const response = await fetch(`${API_URL}/workspaces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workspace),
  });

  const data = await response.json();

  if (data.statusCode === 201) {
    revalidateTag(`workspaces-${user.id}`);
  }

  return data;
}
