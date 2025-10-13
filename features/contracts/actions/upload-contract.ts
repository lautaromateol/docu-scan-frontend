"use server";
import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function uploadContract({
  file,
  workspaceId,
}: {
  file: File;
  workspaceId: string;
}) {
  const payload = await getToken();

  if (!payload) {
    return { message: "Unauthorized.", statusCode: 401 };
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/contracts/${workspaceId}`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });

  const data = await response.json();

  if(data.statusCode === 200) {
    revalidateTag(`kpis-${workspaceId}`)
  }

  return data;
}
