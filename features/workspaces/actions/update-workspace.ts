"use server";
import { getToken } from "@/actions/auth/get-token";
import { UpdateWorkspace } from "../types";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function updateWorkspace(id: string, workspace: UpdateWorkspace) {
  const payload = await getToken();

  if (!payload) {
    return { message: "Unauthorized.", statusCode: 401 };
  }

  const response = await fetch(`${API_URL}/workspaces/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload.token}`,
    },
    body: JSON.stringify(workspace),
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    revalidateTag(`workspaces-${payload.user.id}`);
    revalidateTag(`workspace-${id}`)
  }

  return data;
}
