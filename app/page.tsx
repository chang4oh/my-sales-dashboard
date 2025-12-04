import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				Welcome to Sales Department
				<Link href="/dashboard">
					<button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
						See Sales
					</button>
				</Link>
			</main>
		</div>
	);
}
