"use client"
import { Pie, PieChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

type ContractByCategory = {
  _count: {
    category: number
  }
  category: string
}

export function ContractsByCategoryChart({
  data,
}: {
  data: ContractByCategory[]
}) {
  if (!data || data.length === 0) return null

  const chartData = data.map((item, index) => ({
    name: item.category,
    value: item._count.category,
    fill: `var(--chart-${(index % 5) + 1})`,
  }))

  const chartConfig = data.reduce(
    (acc, item, index) => {
      acc[item.category] = {
        label: item.category,
        color: `var(--chart-${(index % 5) + 1})`,
      }
      return acc
    },
    {
      value: { label: "Contracts" },
    } as ChartConfig
  )

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[140px]"
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={30}
          outerRadius={50}
          strokeWidth={2}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="name" className="text-xs" />}
          // className="-translate-y-2 flex-wrap gap-1 *:basis-1/4 *:justify-center text-xs"
          className="flex items-center"
        />
      </PieChart>
    </ChartContainer>
  )
}