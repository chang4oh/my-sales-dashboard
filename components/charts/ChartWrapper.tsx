// components/charts/ChartWrapper.tsx
"use client";
import React, { useMemo, useState } from "react";
import SalesChart from "./SalesChart";
import { sales2024, sales2023, sales2022 } from "@/data/salesData";
import SalesFilter from "@/components/controls/SalesFilter";

export default function ChartWrapper() {
	const [year, setYear] = useState<number>(2024);
	const [threshold, setThreshold] = useState<number | null>(null);
	const [chartType, setChartType] = useState<"bar" | "line">("bar");

	const raw = year === 2024 ? sales2024 : year === 2023 ? sales2023 : sales2022;

	const filtered = useMemo(() => {
		if (threshold == null) return raw;
		return raw.map((d) => ({
			...d,
			sales: d.sales >= threshold ? d.sales : 0,
		}));
	}, [raw, threshold]);

	return (
		<div className="space-y-4">
			<div className="flex items-center gap-4">
				<select
					value={year}
					onChange={(e) => setYear(Number(e.target.value))}
					className="border rounded px-2 py-1"
				>
					<option value={2024}>2024</option>
					<option value={2023}>2023</option>
					<option value={2022}>2022</option>
				</select>

				<div className="flex items-center gap-2">
					<label>Chart:</label>
					<button
						onClick={() => setChartType("bar")}
						className="px-2 py-1 border rounded"
					>
						Bar
					</button>
					<button
						onClick={() => setChartType("line")}
						className="px-2 py-1 border rounded"
					>
						Line
					</button>
				</div>

				<SalesFilter onChange={(val) => setThreshold(val)} />
			</div>

			<SalesChart data={filtered} chartType={chartType} />
		</div>
	);
}
