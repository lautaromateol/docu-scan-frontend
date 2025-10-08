"use server";

import { getToken } from "@/actions/auth/get-token";
import { KPIS } from "../types";
import { API_URL } from "@/lib/constants";

export async function getKpis({
  workspaceId,
}: {
  workspaceId: string;
}): Promise<KPIS | null> {
  const payload = await getToken();

  if (!payload) return null;

  const response = await fetch(`${API_URL}/analytics/kpis/${workspaceId}`, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
    next: {
      tags: [`kpis-${workspaceId}`],
    },
  });

  const data = await response.json();

  if (data.statusCode === 200) {
    return data.kpis;
  } else return null;
}
