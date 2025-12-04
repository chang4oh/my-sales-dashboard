// components/charts/SalesChart.tsx
"use client";
import React from "react";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	LineChart,
} from "recharts";
import type { SalesPoint } from "@/data/salesData";

type Props = {
	data: SalesPoint[];
	chartType?: "bar" | "line";
};

export default function SalesChart({ data, chartType = "bar" }: Props) {
	return (
		<div className="w-full h-96 bg-white rounded-xl shadow p-4">
			<ResponsiveContainer width="100%" height="100%">
				{chartType === "bar" ? (
					<BarChart data={data}>
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="sales" name="Sales" />
					</BarChart>
				) : (
					<LineChart data={data}>
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="sales" stroke="#8884d8" />
					</LineChart>
				)}
			</ResponsiveContainer>
		</div>
	);
}
