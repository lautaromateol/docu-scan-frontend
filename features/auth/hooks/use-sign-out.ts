import { signOut as signOutAction } from "@/actions/auth/sign-out";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ResponseType = {
  statusCode: number;
};

export function useSignOut() {
  const router = useRouter();

  const {
    mutate: signOut,
    isPending: isSigningOut,
    isError,
    error,
  } = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const data = await signOutAction();

      if (data.statusCode !== 200) {
        throw new Error("There was an error signing out.");
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        router.push("/sign-in");
      }
    },
  });

  return { signOut, isSigningOut, isError, error };
}
