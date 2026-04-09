"use client";
import { AuthLoadingScreen } from "@/features/auth/components/auth-loading-screen";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUser, CreateUserObject } from "@/features/users/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/features/auth/hooks/use-register";
import Link from "next/link";

export function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(CreateUserObject),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const { register, isRegistering, isError, error } = useRegister();

  async function onSubmit(user: CreateUser) {
    register(user);
  }

  return (
    <>
      {isRegistering && <AuthLoadingScreen type="sign-up" />}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {isError ? (
          <div className="bg-destructive/10 p-3 border border-destructive/30 rounded-lg">
            <p className="text-sm text-destructive">{error?.message}</p>
          </div>
        ) : null}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isRegistering} className="w-full mt-2">
          Sign up for free
        </Button>
        <p className="text-center text-sm font-light text-muted-foreground">Already registered? <Link className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" href="/sign-in">Sign in</Link></p>
      </form>
    </Form>
    </>
  );
}
