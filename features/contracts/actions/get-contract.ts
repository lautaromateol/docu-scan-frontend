"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { Contract } from "../types";

export async function getContract({
  contractId,
  workspaceId,
}: {
  contractId: string;
  workspaceId: string;
}): Promise<Contract | null> {
  const payload = await getToken();

  if (!payload) return null;

  const response = await fetch(
    `${API_URL}/contracts/contract/${contractId}?=${workspaceId}`,
    {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
      next: {
        tags: [`contract-${contractId}`],
      },
    }
  );

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.contract;
  } else return null;
}
