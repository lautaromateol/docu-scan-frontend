import { AlertTriangle, Check, FileClock, Pen } from "lucide-react";
import { Contract } from "../types";

interface ContractsAnalyticsProps {
  contracts: Contract[]
}

export function ContractsAnalytics({ contracts }: ContractsAnalyticsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Pen className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Signed Contracts</p>
            <p className="text-xl font-bold text-gray-900">
              {contracts.filter((contract) => contract.status === "SIGNED").length}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <FileClock className="h-5 w-5 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Drafted Contracts</p>
            <p className="text-xl font-bold text-gray-900">
              {contracts.filter((contract) => contract.status === "DRAFT").length}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-100 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-rose-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Expired Contracts</p>
            <p className="text-xl font-bold text-gray-900">
              {contracts.filter((contract) => contract.status === "EXPIRED").length}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Check className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Terminated Contracts</p>
            <p className="text-xl font-bold text-gray-900">
              {contracts.filter((contract) => contract.status === "TERMINATED").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
