"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function joinWorkspace(inviteCode: string, workspaceId: string) {
  const payload = await getToken();

  if (!payload) {
    return { message: "Unauthorized.", statusCode: 401 };
  }

  const response = await fetch(`${API_URL}/workspaces/join/${inviteCode}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    revalidateTag(`workspaces-${payload.user.id}`);
    revalidateTag(`workspace-${workspaceId}`);
  }

  return data;
}
