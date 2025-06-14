"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Workspace } from "../types";

export async function getWorkspaceInfo(inviteCode: string): Promise<Pick<Workspace, "id" | "name"> | null> {
  const payload = await getToken();

  if (!payload) return null;

  const response = await fetch(`${API_URL}/workspaces/workspace-info/${inviteCode}`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
    next: {
      tags: [`workspace-${inviteCode}`]
    }
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.workspace;
  } else return null;
}
