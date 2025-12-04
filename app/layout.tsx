// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = { title: "Sales Dashboard" };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-gray-100 text-gray-900">{children}</body>
		</html>
	);
}
