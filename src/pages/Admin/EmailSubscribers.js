import React, { useEffect, useState } from "react";
import { fetchSubscribers } from "../../service/emailSubscribeService";
import SearchFilter from "../../components/SearchFilter";
import { Pagination } from "../../components/Pagination";

const EmailSubscribers = () => {
	const [search, setSearch] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [loading, setLoading] = useState(false);
	const [subscribers, setSubscribers] = useState([]);
	const [filteredSubscribers, setFilteredSubscribers] = useState([]);

	const handleChange = (field) => (e) => {
		const { value } = e.target;
		if (field === "search") setSearch(value);
		else if (field === "startDate") setStartDate(value);
		else if (field === "endDate") setEndDate(value);
	};

	const handleSearchClick = () => {
		fetchSubscribersData({ email: search });
	};

	const handlePageChange = (page) => {
		fetchSubscribersData({ page, startDate, endDate });
	};

	const handleDateFilterClick = () => {
		fetchSubscribersData({ startDate, endDate });
	};

	const fetchSubscribersData = async (query) => {
		setLoading(true);
		const response = await fetchSubscribers(query);
		if (response.error) {
			console.log(response.message);
		} else {
			setSubscribers(response);
			setFilteredSubscribers(response.data.results); // Initial data
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchSubscribersData({ page: 1 });
	}, []);

	return (
		<div className="max-w-7xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Email Subscribers</h1>

			<SearchFilter
				search={search}
				startDate={startDate}
				endDate={endDate}
				onChange={handleChange}
				onSearchClick={handleSearchClick}
				onDateFilterClick={handleDateFilterClick}
			/>

			<div className="border-t border-gray-200 w-full my-10"></div>

			{/* Subscriber List using divs */}
			{!loading && (
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
			)}
			{!loading && (
				<div className="mb-6">
					<Pagination
						currentPage={subscribers?.data?.currentPage}
						totalPages={subscribers?.data?.totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
};

export default EmailSubscribers;
