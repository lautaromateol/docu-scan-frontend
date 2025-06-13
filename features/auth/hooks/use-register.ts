import { CreateUser, User } from "@/features/users/types";
import { API_URL } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ResponseType = {
  statusCode: number,
  success: boolean,
  user: User
}

export function useRegister() {

  const router = useRouter()

  const { mutate: register, isPending: isRegistering, isError, error } = useMutation<ResponseType, Error, CreateUser>({
    mutationFn: async(user) => {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()

      if(data.statusCode !== 201) {
        throw new Error(data.message ?? "There was an error creating your account.")
      }

      return data
    },
    onSuccess: (data) => {
      if(data.statusCode === 201) {
        router.push("/sign-in")
      }
    }
  })

  return { register, isRegistering, isError, error }
}