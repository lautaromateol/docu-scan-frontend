"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  UpdateWorkspace,
  UpdateWorkspaceObject,
  Workspace,
} from "@/features/workspaces/types";
import { useUpdateWorkspace } from "../hooks/use-update-workspace";


interface UpdateWorkspaceFormProps {
  workspace: Workspace
}

export function UpdateWorkspaceForm({ workspace }: UpdateWorkspaceFormProps) {
  const form = useForm({
    resolver: zodResolver(UpdateWorkspaceObject),
    defaultValues: {
      name: workspace.name,
    },
  });

  const { updateWorkspace, isUpdatingWorkspace, error, isError } =
    useUpdateWorkspace(workspace.id);

  function onSubmit(workspace: UpdateWorkspace) {
    updateWorkspace(workspace)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-1/3">
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
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isUpdatingWorkspace} className="w-full mt-2">
          Update workspace
        </Button>
      </form>
    </Form>
  );
}
