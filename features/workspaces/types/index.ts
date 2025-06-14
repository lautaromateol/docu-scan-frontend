import { z } from 'zod';

export const CreateWorkspaceObject = z.object({
  name: z
    .string()
    .min(5, {
      message: 'Please insert at least 5 characters',
    })
    .max(50, {
      message: 'The maximum length allowed it is 50 characters.',
    }),
});

export type CreateWorkspace = z.infer<typeof CreateWorkspaceObject>

export const UpdateWorkspaceObject = z.object({
  name: z
    .string()
    .min(5, {
      message: 'Please insert at least 5 characters',
    })
    .max(50, {
      message: 'The maximum length allowed it is 50 characters.',
    })
    .optional()
});

export type UpdateWorkspace = z.infer<typeof UpdateWorkspaceObject>

export type Workspace = {
  id: string;
  name: string;
  inviteCode: string;
}
