export enum Role {
  MEMBER = "MEMBER",
  ADMIN = "ADMIN"
}

export type Member = {
  id: string;
  role: Role;
  userId: string;
  workspaceId: string;
  user: User;
  createdAt: Date
}

type User = {
  email: string;
  name: string;
  pictureUrl?: string;
}