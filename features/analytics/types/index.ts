import { Contract } from "@/features/contracts/types"

type ContractFixed = Omit<Contract, "endDate"> & {
  endDate: string;
};

export interface KPIS {
  totalContracts: number
  contractsByCategory: ContractByCategory[]
  contractsByStatus: ContractByStatus[]
  upcomingDeadlines: UpcomingDeadline[]
  upcomingContracts: ContractFixed[]
  totalObligations: number
  obligationsByType: ObligationsByType[]
  activeParties: number
  terminationClauses: number
}

export type ContractByCategory = {
  _count: {
    category: number
  }
  category: string
}

export type ContractByStatus = {
  _count: {
    status: number
  }
  status: string
}

export type ObligationsByType = {
  _count: {
    type: number
  }
  type: string
}

export type UpcomingDeadline = {
  id: string
  contractId: string
  description: string
  date: string
  type: string
  contract: {
    id: string
    title: string
    category: string
  }
}