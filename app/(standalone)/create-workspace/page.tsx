import { CreateWorkspaceForm } from "../components/create-workspace-form";

export default function CreateWorkspacePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-medium text-center">
          Create your first workspace!
        </h2>
        <p className="text-slate-500 font-light text-sm">
          Invite your team-mates or colleagues to start working together now.
        </p>
      </div>
      <CreateWorkspaceForm />
    </div>
  );
}
