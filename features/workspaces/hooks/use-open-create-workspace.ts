import { create } from "zustand"

interface UseOpenCreateWorkspaceProps {
  isOpen: boolean,
  open: () => void,
  close: () => void
}

export const useOpenCreateWorkspace = create<UseOpenCreateWorkspaceProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))

