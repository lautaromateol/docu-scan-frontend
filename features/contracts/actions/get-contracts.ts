"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Contract } from "../types";

export async function getContracts(workspaceId: string): Promise<Contract[]> {
  const payload = await getToken();

  if (!payload) return [];

  const response = await fetch(`${API_URL}/contracts/${workspaceId}`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
    next: {
      tags: [`contracts-${workspaceId}`],
    },
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.contracts;
  } else return [];
}
