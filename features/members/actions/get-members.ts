"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Member } from "../types";

export async function getMembers(workspaceId: string): Promise<Member[]> {
  const payload = await getToken();

  if (!payload) return [];

  const response = await fetch(`${API_URL}/members/${workspaceId}`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
    next: {
      tags: [`members-${workspaceId}`],
    },
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.members;
  } else return [];
}
