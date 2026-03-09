"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "@/features/auth/hooks/use-sign-in";
import { SignInUser, SignInUserObject } from "@/features/users/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignInForm() {
  const form = useForm({
    resolver: zodResolver(SignInUserObject),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signIn, isSigningIn, error, isError } = useSignIn();

  async function onSubmit(user: SignInUser) {
    signIn(user)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {isError ? (
          <div className="bg-destructive/10 p-3 border border-destructive/30 rounded-lg">
            <p className="text-sm text-destructive">{error?.message}</p>
          </div>
        ) : null}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSigningIn} className="w-full mt-2">Sign in</Button>
        <p className="text-center text-sm font-light text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" href="/sign-up">
            Sign up for free
          </Link>
        </p>
      </form>
    </Form>
  );
}
