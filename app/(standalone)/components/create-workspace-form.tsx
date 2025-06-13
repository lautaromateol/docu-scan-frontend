"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateWorkspace } from "@/features/workspaces/hooks/use-create-workspace";
import {
  CreateWorkspace,
  CreateWorkspaceObject,
} from "@/features/workspaces/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function CreateWorkspaceForm() {
  const form = useForm({
    resolver: zodResolver(CreateWorkspaceObject),
    defaultValues: {
      name: "",
    },
  });

  const { createWorkspace, isCreatingWorkspace, error, isError } =
    useCreateWorkspace();

  function onSubmit(workspace: CreateWorkspace) {
    createWorkspace(workspace);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {isError ? (
          <div className="bg-red-100 p-2 border border-destructive rounded-sm shadow">
            <p className="text-sm font-light text-destructive">
              {error?.message}
            </p>
          </div>
        ) : null}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isCreatingWorkspace} className="w-full mt-2">
          Create workspace
        </Button>
      </form>
    </Form>
  );
}
