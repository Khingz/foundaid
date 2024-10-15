import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import EventCard from "../components/EventCard";
import { Banner } from "../components/ui/Banner";
import BannerImage from "../assets/images/emergency relieve.jpg";

 const NewsAndEvents = () => {
    const [upcomingEvents, setUpcomingEvents] = useState(true);
    useEffect(() => {
        setUpcomingEvents(true);
    }, []);

    return (
        <div>
            <Helmet className="mb-20">
                <title>Foundaid America - News&Events</title>
                <meta name='description' content='Upcoming and concluded events' />
            </Helmet>
			<Banner image={BannerImage} />
            <div className="my-10 px-4 md:px-10">
                <h1 className="text-customBlue text-2xl md:text-4xl font-semibold mb-4">Stay Updated on Our Events</h1>
                <p className="text-lg md:text-xl font-extralight mb-8 md:w-2/3">Don’t miss out on our latest initiatives and gatherings! From upcoming conferences and community workshops to recent events that made a difference, explore what’s happening and catch up on what you may have missed.</p>
                <div>
                    {upcomingEvents && <div>
                        <h2 className="text-customBlue text-2xl font-extralight mb1">Upcoming Events</h2>
                        <p className="text-base md:text-lg font-extralight mb-8 md:w-2/3">Be sure to mark your calendar for our upcoming events. Join us in making a difference!</p>
                        <div className="flex flex-wrap gap-4 justify-center items-start">
                            <EventCard maxWidth="100%"/>
                        </div>
                        <div className="border-t border-gray-200 my-10"></div>
                        </div>}
                        {upcomingEvents && <div>
                        <h2 className="text-customBlue text-2xl font-extralight mb-3">Past Events</h2>
                        <p className="text-base md:text-lg font-extralight mb-8 md:w-2/3">Curious about events you missed? Checkout passed events here</p>
                        <div className="flex flex-wrap gap-4 justify-center items-start mx-auto">
                            <EventCard maxWidth="40%"/>
                            <EventCard maxWidth="40%"/>
                            <EventCard maxWidth="40%"/>
                        </div>
                        </div>}
                </div>
            </div>
        </div>
    )
 }

 export default NewsAndEvents;