import { create } from "zustand"

interface UseOpenUploadContractProps {
  isOpen: boolean,
  open: () => void,
  close: () => void
}

export const useOpenUploadContract = create<UseOpenUploadContractProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))

