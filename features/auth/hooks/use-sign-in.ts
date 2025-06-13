import { setJwtToken } from "@/actions/auth/set-jwt-token";
import { SignInUser } from "@/features/users/types";
import { API_URL } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ResponseType = {
  statusCode: number;
  success: boolean;
  token: string;
};

export function useSignIn() {
  const router = useRouter();

  const {
    mutate: signIn,
    isPending: isSigningIn,
    isError,
    error,
  } = useMutation<ResponseType, Error, SignInUser>({
    mutationFn: async (user) => {
      const response = await fetch(`${API_URL}/auth/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (data.statusCode !== 200) {
        throw new Error(data.message ?? "There was an error signing in.");
      }

      return data;
    },
    onSuccess: async (data) => {
      if (data.statusCode === 200) {
        await setJwtToken(data.token);
        router.push("/dashboard");
      }
    },
  });

  return { signIn, isSigningIn, isError, error };
}
