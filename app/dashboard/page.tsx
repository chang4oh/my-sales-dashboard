// app/dashboard/page.tsx
import React from "react";
import ChartWrapper from "@/components/charts/ChartWrapper";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
	return (
		<main className="p-8">
			<h1 className="text-2xl font-semibold mb-4">Sales Dashboard</h1>
			<ChartWrapper />
		</main>
	);
}
