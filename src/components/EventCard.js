import React from "react";
import image from "../assets/images/kids in school.jpg"
import { Link } from "react-router-dom";


const EventCard = ({maxWidth}) => {
    return (
        <div className={`flex border p-4 flex-col justify-start items-start gap-4 md:max-w-[${maxWidth}]`}>
        {/* Date Section */}
        <div className="flex-shrink-0 text-center pr-4">
          <p className="text-lg font-bold text-gray-600">Oct</p>
          <p className="text-4xl font-bold text-gray-900">12</p>
        </div>
  
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Event"
            className="w-[100%] object-cover"
          />
        </div>
  
        {/* Details Section */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-800">Event Title</h3>
          <p className="text-gray-600 mb-4">
          A brief description of the event goes here. It can be one or two
          lines giving a summary of the event purpose or activities.A brief description of the event goes here. It can be one or two
          lines giving a summary of the event purpose or activities.A brief description of the event goes here. It can be one or two
          lines giving a summary of the event purpose or activities.A brief description of the event goes here. It can be one or two
          lines giving a summary of the event purpose or activities.
          </p>
          <Link to={""} button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ">
            See Details
          </Link >
        </div>
      </div>
    )
}

export default EventCard;