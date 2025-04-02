"use client";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Dashboard/Header";
import { TabNav } from "../components/Dashboard/TabNav";
import { AccountCard } from "../components/Dashboard/AccountCard";
import { FinancialInfo } from "../components/Dashboard/FinancialInfo";
import { Transactions } from "../components/Dashboard/Transactions";

export default function BackOffice() {
  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 h-full w-64">
        <Sidebar />
      </div>
      <main className="flex-1 pl-64 bg-gray-50">
        <div className="max-w-[1440px] mx-auto p-8">
          <Header userName="Paul" userImage="/user.png" />
          <TabNav />
          <AccountCard
            name="Paul Dumartin"
            address="14 rue du Louvre"
            postalCode="PARIS 75001"
            segment="RET"
            riskLevel="Risques faible"
            riskScore="B"
            lastTransaction="80K"
          />
          <FinancialInfo />
          <Transactions />
        </div>
      </main>
    </div>
  );
}
