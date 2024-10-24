import React, { useEffect, useState } from "react";
import { fetchSubscribers } from "../../service/emailSubscribeService";
import DotSpinner from "../../components/Spinner";

const EmailSubscribers = () => {
	const [search, setSearch] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [loading, setLoading] = useState(false);
	const [subscribers, setSubscribers] = useState([]);

	const filteredSubscribers = subscribers?.data?.results.filter(
		(subscriber) => {
			const matchesSearch = subscriber.email
				.toLowerCase()
				.includes(search.toLowerCase());

			const matchesStartDate =
				!startDate || new Date(subscriber.createdAt) >= new Date(startDate);
			const matchesEndDate =
				!endDate || new Date(subscriber.createdAt) <= new Date(endDate);

			return matchesSearch && matchesStartDate && matchesEndDate;
		}
	);

	useEffect(() => {
		const fetchSubscribersData = async () => {
			setLoading(true);
			const response = await fetchSubscribers();
			if (response.error) {
				console.log(response.message);
			} else {
				setSubscribers(response);
			}
			setLoading(false);
		};
		fetchSubscribersData();
	}, []);

	if (loading) {
		return (
			<div className="mt-36">
				<DotSpinner />
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Email Subscribers</h1>

			{/* Filters */}
			<div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
				<input
					type="text"
					placeholder="Search by email"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
				/>

				<div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
					<input
						type="date"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
					/>

					<input
						type="date"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			{/* Subscriber List using divs */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredSubscribers && filteredSubscribers.length > 0 ? (
					filteredSubscribers.map((subscriber, index) => (
						<div
							key={index}
							className="p-4 border rounded-lg shadow-sm bg-white flex flex-col gap-2"
						>
							<span className="font-medium text-gray-800">
								{subscriber.email}
							</span>
							<span className="text-gray-500">
								Subscribed on:{" "}
								{new Date(subscriber.createdAt).toLocaleDateString()}
							</span>
						</div>
					))
				) : (
					<div className="col-span-full text-center text-gray-500">
						No subscribers found.
					</div>
				)}
			</div>
		</div>
	);
};

export default EmailSubscribers;
