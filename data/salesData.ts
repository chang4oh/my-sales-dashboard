// data/salesData.ts
export type SalesPoint = { month: string; sales: number; year: number };

export const sales2024: SalesPoint[] = [
	{ month: "Jan", sales: 5400, year: 2024 },
	{ month: "Feb", sales: 6300, year: 2024 },
	{ month: "Mar", sales: 7200, year: 2024 },
	{ month: "Apr", sales: 8300, year: 2024 },
	{ month: "May", sales: 9100, year: 2024 },
	{ month: "Jun", sales: 7600, year: 2024 },
	{ month: "Jul", sales: 8800, year: 2024 },
	{ month: "Aug", sales: 9400, year: 2024 },
	{ month: "Sep", sales: 7600, year: 2024 },
	{ month: "Oct", sales: 8700, year: 2024 },
	{ month: "Nov", sales: 9200, year: 2024 },
	{ month: "Dec", sales: 10500, year: 2024 },
];

export const sales2023: SalesPoint[] = [
	{ month: "Jan", sales: 4200, year: 2023 },
	{ month: "Feb", sales: 5000, year: 2023 },
	{ month: "Mar", sales: 5800, year: 2023 },
	{ month: "Apr", sales: 6400, year: 2023 },
	{ month: "May", sales: 7000, year: 2023 },
	{ month: "Jun", sales: 6900, year: 2023 },
	{ month: "Jul", sales: 7300, year: 2023 },
	{ month: "Aug", sales: 7600, year: 2023 },
	{ month: "Sep", sales: 6700, year: 2023 },
	{ month: "Oct", sales: 7400, year: 2023 },
	{ month: "Nov", sales: 8000, year: 2023 },
	{ month: "Dec", sales: 9200, year: 2023 },
];

export const sales2022: SalesPoint[] = [
	{ month: "Jan", sales: 3300, year: 2022 },
	{ month: "Feb", sales: 3600, year: 2022 },
	{ month: "Mar", sales: 4100, year: 2022 },
	{ month: "Apr", sales: 4800, year: 2022 },
	{ month: "May", sales: 5200, year: 2022 },
	{ month: "Jun", sales: 5100, year: 2022 },
	{ month: "Jul", sales: 5400, year: 2022 },
	{ month: "Aug", sales: 5900, year: 2022 },
	{ month: "Sep", sales: 6100, year: 2022 },
	{ month: "Oct", sales: 6500, year: 2022 },
	{ month: "Nov", sales: 7000, year: 2022 },
	{ month: "Dec", sales: 8000, year: 2022 },
];

export const allSales = [...sales2024, ...sales2023, ...sales2022];
