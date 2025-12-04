// components/controls/SalesFilter.tsx
"use client";
import React, { useState } from "react";

type Props = { onChange: (threshold: number | null) => void };

export default function SalesFilter({ onChange }: Props) {
	const [val, setVal] = useState<string>("");

	const apply = () => {
		const n = val.trim() === "" ? null : Number(val);
		onChange(n);
	};

	return (
		<div className="flex items-center gap-2">
			<input
				type="number"
				placeholder="min sales"
				value={val}
				onChange={(e) => setVal(e.target.value)}
				className="border rounded px-2 py-1"
			/>
			<button onClick={apply} className="px-2 py-1 border rounded">
				Apply
			</button>
		</div>
	);
}
