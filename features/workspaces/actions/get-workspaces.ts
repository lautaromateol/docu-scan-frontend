"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Workspace } from "../types";

type ResponseType = {
  success: boolean;
  statusCode: number;
  workspaces: Workspace[];
}

export async function getWorkspaces(): Promise<ResponseType> {
  const { token, user } = await getToken();

  const response = await fetch(`${API_URL}/workspaces`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: [`workspaces-${user.id}`],
    },
  });

  const data = await response.json();

  return data;
}
