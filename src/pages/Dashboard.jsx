import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
	ArrowUpRight,
	CalendarDays,
	CheckCircle2,
	Clock3,
	DollarSign,
	MapPin,
	MoreHorizontal,
	Plane,
	TrendingUp,
	WalletCards,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
});

const getTripStatus = (trip) => {
	const now = new Date();
	const startDate = new Date(trip.startDate);
	const endDate = new Date(trip.endDate);

	if (endDate < now) return "completed";
	if (startDate <= now && endDate >= now) return "ongoing";
	return "upcoming";
};

const formatDate = (date) => dateFormatter.format(new Date(date));

const getInitials = (title = "Trip") =>
	title
		.split(" ")
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase();

function EmptyState({ message }) {
	return <p className="py-8 text-center text-sm text-slate-500">{message}</p>;
}

export default function Dashboard({ trips = [] }) {
	const dashboard = useMemo(() => {
		const normalizedTrips = trips.map((trip) => ({
			...trip,
			status: getTripStatus(trip),
			budget: {
				total: Number(trip.budget?.total || 0),
				spent: Number(trip.budget?.spent || 0),
			},
		}));

		const destinations = [
			...new Set(normalizedTrips.flatMap((trip) => trip.destinations || [])),
		];

		return {
			trips: normalizedTrips,
			destinations,
			completed: normalizedTrips.filter((trip) => trip.status === "completed")
				.length,
			ongoing: normalizedTrips.filter((trip) => trip.status === "ongoing")
				.length,
			totalBudget: normalizedTrips.reduce(
				(total, trip) => total + trip.budget.total,
				0
			),
			totalSpent: normalizedTrips.reduce(
				(total, trip) => total + trip.budget.spent,
				0
			),
		};
	}, [trips]);

	const budgetProgress = dashboard.totalBudget
		? Math.min(
				Math.round((dashboard.totalSpent / dashboard.totalBudget) * 100),
				100
			)
		: 0;

	const stats = [
		{
			label: "Total trips",
			value: dashboard.trips.length,
			description: "All your planned journeys",
			icon: Plane,
			iconClass: "bg-blue-500/10 text-blue-600",
		},
		{
			label: "Completed",
			value: dashboard.completed,
			description: "Trips successfully finished",
			icon: CheckCircle2,
			iconClass: "bg-emerald-500/10 text-emerald-600",
		},
		{
			label: "Ongoing",
			value: dashboard.ongoing,
			description: "Trips currently in progress",
			icon: Clock3,
			iconClass: "bg-orange-500/10 text-orange-600",
		},
		{
			label: "Total budget",
			value: currency.format(dashboard.totalBudget),
			description: `${currency.format(dashboard.totalSpent)} spent so far`,
			icon: WalletCards,
			iconClass: "bg-violet-500/10 text-violet-600",
		},
	];

	const sortedTrips = dashboard.trips
		.slice()
		.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

	return (
		<main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-8">
				<section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
					<div>
						<div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
							<span className="h-2 w-2 rounded-full bg-blue-600" />
							Travel overview
						</div>
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Good morning, traveler
						</h1>
						<p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
							Keep track of your adventures, expenses, and upcoming plans from
							one place.
						</p>
					</div>

					<Button asChild className="w-fit rounded-xl shadow-sm">
						<Link to="/trips">
							Manage trips
							<ArrowUpRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</section>

				<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{stats.map((stat) => {
						const Icon = stat.icon;

						return (
							<Card
								key={stat.label}
								className="rounded-2xl border-slate-200 shadow-sm"
							>
								<CardContent className="p-5">
									<div className="flex items-start justify-between">
										<div>
											<p className="text-sm font-medium text-slate-500">
												{stat.label}
											</p>
											<p className="mt-3 text-3xl font-bold tracking-tight">
												{stat.value}
											</p>
										</div>
										<div className={`rounded-xl p-3 ${stat.iconClass}`}>
											<Icon className="h-5 w-5" />
										</div>
									</div>
									<p className="mt-4 text-xs text-slate-500">
										{stat.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</section>

				<section className="grid gap-6 lg:grid-cols-2">
					<Card className="rounded-2xl border-slate-200 shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between space-y-0">
							<div>
								<CardTitle className="text-lg">Trip timeline</CardTitle>
								<p className="mt-1 text-sm text-slate-500">
									Your latest travel plans
								</p>
							</div>
							<Button variant="ghost" size="sm" asChild>
								<Link to="/trips">View all</Link>
							</Button>
						</CardHeader>

						<CardContent>
							{sortedTrips.length === 0 ? (
								<EmptyState message="No trips available yet." />
							) : (
								<div className="space-y-1">
									{sortedTrips.map((trip, index) => (
										<div
											key={trip._id}
											className="relative flex gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50"
										>
											<div className="relative flex flex-col items-center">
												<div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
													{getInitials(trip.title)}
												</div>
												{index !== sortedTrips.length - 1 && (
													<div className="absolute top-10 h-full w-px bg-slate-200" />
												)}
											</div>

											<div className="min-w-0 flex-1 pb-4">
												<div className="flex items-start justify-between gap-3">
													<div>
														<h3 className="truncate font-semibold">
															{trip.title}
														</h3>
														<div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
															<CalendarDays className="h-3.5 w-3.5" />
															{formatDate(trip.startDate)} – {formatDate(trip.endDate)}
														</div>
													</div>
													<Badge
														variant="secondary"
														className={
															trip.status === "completed"
																? "bg-emerald-50 text-emerald-700"
																: trip.status === "ongoing"
																	? "bg-orange-50 text-orange-700"
																	: "bg-blue-50 text-blue-700"
														}
													>
														{trip.status}
													</Badge>
												</div>

												<div className="mt-3 flex flex-wrap gap-2">
													{(trip.destinations || []).map((destination) => (
														<span
															key={destination}
															className="flex items-center gap-1 text-xs capitalize text-slate-500"
														>
															<MapPin className="h-3.5 w-3.5 text-slate-400" />
															{destination}
														</span>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</CardContent>
					</Card>

					<Card className="rounded-2xl border-slate-200 shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between space-y-0">
							<div>
								<CardTitle className="text-lg">Budget overview</CardTitle>
								<p className="mt-1 text-sm text-slate-500">
									Combined budget across all trips
								</p>
							</div>
							<div className="rounded-xl bg-violet-50 p-3 text-violet-600">
								<DollarSign className="h-5 w-5" />
							</div>
						</CardHeader>

						<CardContent>
							<div className="rounded-2xl bg-slate-950 p-5 text-white">
								<div className="flex items-start justify-between">
									<div>
										<p className="text-sm text-slate-400">Total allocated</p>
										<p className="mt-2 text-3xl font-bold">
											{currency.format(dashboard.totalBudget)}
										</p>
									</div>
									<TrendingUp className="h-5 w-5 text-emerald-400" />
								</div>

								<div className="mt-6">
									<div className="mb-2 flex justify-between text-xs">
										<span className="text-slate-400">Spent</span>
										<span className="font-medium">{budgetProgress}%</span>
									</div>
									<Progress
										value={budgetProgress}
										className="h-2 bg-white/10 [&>div]:bg-emerald-400"
									/>
									<div className="mt-3 flex justify-between text-xs">
										<span className="text-slate-400">
											{currency.format(dashboard.totalSpent)} spent
										</span>
										<span className="text-slate-400">
											{currency.format(
												Math.max(dashboard.totalBudget - dashboard.totalSpent, 0)
											)} remaining
										</span>
									</div>
								</div>
							</div>

							<div className="mt-5 space-y-4">
								{dashboard.trips.slice(0, 4).map((trip) => {
									const percentage = trip.budget.total
										? Math.min(
												Math.round((trip.budget.spent / trip.budget.total) * 100),
												100
											)
										: 0;

									return (
										<div key={trip._id}>
											<div className="mb-2 flex items-center justify-between gap-3 text-sm">
												<span className="max-w-[55%] truncate font-medium">
													{trip.title}
												</span>
												<span className="text-right text-xs text-slate-500">
													{currency.format(trip.budget.spent)} / {currency.format(trip.budget.total)}
												</span>
											</div>
											<Progress value={percentage} className="h-2" />
										</div>
									);
								})}

								{dashboard.trips.length === 0 && (
									<EmptyState message="Budget data will appear here." />
								)}
							</div>
						</CardContent>
					</Card>
				</section>

				<Card className="rounded-2xl border-slate-200 shadow-sm">
					<CardHeader className="flex flex-row items-center justify-between space-y-0">
						<div>
							<CardTitle className="text-lg">Destinations</CardTitle>
							<p className="mt-1 text-sm text-slate-500">
								Places included in your travel plans
							</p>
						</div>
						<Button variant="ghost" size="icon" aria-label="More options">
							<MoreHorizontal className="h-5 w-5" />
						</Button>
					</CardHeader>

					<Separator />

					<CardContent className="flex flex-wrap gap-3 pt-6">
						{dashboard.destinations.length > 0 ? (
							dashboard.destinations.map((destination) => (
								<Badge
									key={destination}
									variant="outline"
									className="rounded-full border-slate-200 bg-white px-4 py-2 text-sm font-medium capitalize shadow-sm"
								>
									<MapPin className="mr-2 h-4 w-4 text-blue-600" />
									{destination}
								</Badge>
							))
						) : (
							<EmptyState message="No destinations added yet." />
						)}
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
