import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContractsSearchBarProps {
  filters: {
    search: string;
    status: string;
  };
  setFilters: Dispatch<
    SetStateAction<{
      search: string;
      status: string;
    }>
  >;
}

export function ContractsSearchBar({
  filters,
  setFilters,
}: ContractsSearchBarProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFilters((filters) => ({ ...filters, search: e.target.value }));
  }

  function handleStatusChange(value: string) {
    setFilters((filters) => ({ ...filters, status: value }));
  }

  return (
    <div className="w-full grid grid-cols-5 gap-x-6 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
      <div className="col-span-3 flex flex-col gap-y-2">
        <p className="text-sm font-medium">Search Contract</p>
        <Input
          value={filters.search}
          onChange={handleChange}
          className="w-full"
          placeholder="Search by name, description or jurisdiction..."
        />
      </div>
      <div className="col-span-2 flex flex-col gap-y-2">
        <p className="text-sm font-medium">Filter by status</p>
        <div className="flex items-center gap-x-2">
          <Funnel className="size-4 text-indigo-800" />
          <Select value={filters.status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All status..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="DRAFT">Draft</SelectItem>
              <SelectItem value="SIGNED">Signed</SelectItem>
              <SelectItem value="EXPIRED">Expired</SelectItem>
              <SelectItem value="TERMINATED">Terminated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
