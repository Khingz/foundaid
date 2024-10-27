import React from "react";

const SearchFilter = ({
	search,
	startDate,
	endDate,
	onChange,
	onSearchClick,
	onDateFilterClick,
}) => {
	return (
		<div className="flex flex-col justify-between gap-4 mb-6">
			{/* Search Input with Button */}
			<div className="flex w-full md:w-2/3">
				<input
					type="text"
					placeholder="Search by email"
					value={search}
					onChange={onChange("search")}
					className="w-full px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
				/>
				<button
					onClick={onSearchClick}
					className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
				>
					Search
				</button>
			</div>

			{/* Date Filters with Button */}
			<div className="flex flex-col gap-4 w-full md:w-2/3">
				<h4 className="font-extralight">Filter by date - Enter a start and end date</h4>
				<input
					type="date"
					value={startDate}
					onChange={onChange("startDate")}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
				/>
				<input
					type="date"
					value={endDate}
					onChange={onChange("endDate")}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
				/>
				<button
					onClick={onDateFilterClick}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg"
				>
					Filter by Date
				</button>
			</div>
		</div>
	);
};

export default SearchFilter;
