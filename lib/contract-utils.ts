import { Contract } from "@/features/contracts/types"

export function getContractsExpiringInNext30Days(contracts: Contract[]): Contract[] {
  const now = new Date()
  const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

  return contracts
    .filter((contract) => {
      if (!contract.endDate) return false

      const endDate = new Date(contract.endDate)
      return endDate >= now && endDate <= thirtyDaysFromNow
    })
    .sort((a, b) => {
      const dateA = new Date(a.endDate!).getTime()
      const dateB = new Date(b.endDate!).getTime()
      return dateA - dateB
    })
}

export function getDaysUntilExpiration(endDate: string): number {
  const now = new Date()
  const end = new Date(endDate)
  const diffTime = end.getTime() - now.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function getCategoryLabel(category: Contract["category"]): string {
  const labels: Record<Contract["category"], string> = {
    TRANSFER: "Transfer",
    USE: "Use",
    SERVICES: "Services",
    GUARANTEE: "Guarantee",
    COLABORATION: "Colaboration",
  }
  return labels[category]
}

export function getStatusLabel(status: Contract["status"]): string {
  const labels: Record<NonNullable<Contract["status"]>, string> = {
    DRAFT: "Draft",
    SIGNED: "Signed",
    EXPIRED: "Expired",
    TERMINATED: "Terminated",
  }
  return status ? labels[status] : "Sin estado"
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}
