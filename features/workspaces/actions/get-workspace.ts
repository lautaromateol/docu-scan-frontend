"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Workspace } from "../types";

export async function getWorkspace(id: string): Promise<Workspace | null> {
  const payload = await getToken();

  if (!payload) return null;

  const response = await fetch(`${API_URL}/workspaces/${id}`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
    next: {
      tags: [`workspace-${id}`],
    },
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.workspace;
  } else return null;
}
