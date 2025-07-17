export type ContractParty = {
  name: string
  identifier?: string | null
  role: string
}

export type Obligation = {
  partyName: string
  description: string
  type: 'PRIMARY' | 'ACCESSORY' | 'CONDITIONAL' | 'RECURRING'
  dueDate?: string | null // ISO date string
  recurrence?: string | null
}

export type TerminationClause = {
  description: string
  cause?: string | null
  noticePeriodDays?: number | null
}

export type ContractDeadline = {
  description: string
  date: string // ISO date string
  type: string
}

export type ContractClause = {
  title: string
  bodyText: string
  clauseType: 'GENERAL' | 'CONFIDENTIALITY' | 'PENALTY' | 'JURISDICTION' | 'OTHER'
}

export type Contract = {
  id: string
  title: string
  category: 'TRANSFER' | 'USE' | 'SERVICES' | 'GUARANTEE' | 'COLABORATION'
  descriptionSummary?: string | null
  jurisdiction?: string | null
  governingLaw?: string | null
  signingDate?: string | null // ISO date string
  startDate?: string | null // ISO date string
  endDate?: string | null // ISO date string
  status?: 'DRAFT' | 'SIGNED' | 'EXPIRED' | 'TERMINATED'
  createdAt: Date

  parties?: ContractParty[]
  obligations?: Obligation[]
  terminationClauses?: TerminationClause[]
  deadlines?: ContractDeadline[]
  clauses?: ContractClause[]
}
