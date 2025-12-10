import React, { useState, useEffect } from "react";
import { Styled } from "./styled";
import {
    TbCalendarEvent,
    TbClock,
    TbMapPin,
    TbUsersGroup,
    TbSparkles,
    TbChevronRight,
} from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

import imgUpcoming1 from "/images/events/upcoming-1.jpg";
import imgUpcoming2 from "/images/events/upcoming-2.jpg";
import imgUpcoming3 from "/images/events/upcoming-3.jpg";

import imgPast1 from "/images/events/past-1.jpg";
import imgPast2 from "/images/events/past-2.jpg";
import imgPast3 from "/images/events/past-3.jpg";

/* ---------------------------
   UPCOMING EVENTS
---------------------------- */

const UPCOMING = [
    {
        title: "Women in Tech Meetup – Jamshedpur",
        date: "Feb 22, 2025",
        time: "3:00 PM – 6:00 PM",
        location: "Bistupur Community Hall",
        attendees: "150+ expected",
        img: imgUpcoming1,
        tag: "Meetup",
        description:
            "An open community gathering for women in and around Jamshedpur to share journeys, find collaborators, and meet local mentors.",
    },
    {
        title: "Frontend Bootcamp (React Edition)",
        date: "Mar 8, 2025",
        time: "10:00 AM – 4:00 PM",
        location: "XITE College Auditorium",
        attendees: "80 seats only",
        img: imgUpcoming2,
        tag: "Workshop",
        description:
            "A full–day hands-on bootcamp where we build a complete React project from scratch – ideal for students and early professionals.",
    },
    {
        title: "Tech Leadership for Women",
        date: "Apr 15, 2025",
        time: "11:00 AM – 2:00 PM",
        location: "Centre for Excellence",
        attendees: "120 expected",
        img: imgUpcoming3,
        tag: "Seminar",
        description:
            "Panel conversations with women leaders from steel, IT, and manufacturing talking about real leadership paths from Jamshedpur.",
    },
];

/* ---------------------------
   PAST EVENTS
---------------------------- */

const PAST = [
    {
        title: "JWIT Launch Event",
        date: "Nov 11, 2024",
        location: "Jubilee Park Centre",
        attendees: "200+ attended",
        img: imgPast1,
        tag: "Launch",
        description:
            "The first official gathering of Jamshedpur Women in Technology with lightning talks, introductions, and community planning.",
    },
    {
        title: "Git & GitHub Workshop",
        date: "Dec 5, 2024",
        location: "NIT Jamshedpur",
        attendees: "100+ attended",
        img: imgPast2,
        tag: "Workshop",
        description:
            "A practical introduction to version control, branching, and GitHub workflows – every attendee pushed their first PR.",
    },
    {
        title: "AI Awareness Session",
        date: "Jan 12, 2025",
        location: "Jamshedpur Women's College",
        attendees: "140+ attended",
        img: imgPast3,
        tag: "Seminar",
        description:
            "Exploring what AI really is, how it is used in industry, and where students can start learning responsibly.",
    },
];

// helper: map hash -> filter
const getFilterFromHash = (hash) => {
    if (hash === "#past") return "past";
    // default and also "#upcoming"
    return "upcoming";
};

const Events = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // initial filter from URL hash; default = "upcoming"
    const [filter, setFilter] = useState(() => getFilterFromHash(location.hash));
    const [selectedEvent, setSelectedEvent] = useState(null);

    // whenever hash changes (e.g. NavLink / manual URL), sync tab
    useEffect(() => {
        setFilter(getFilterFromHash(location.hash));
    }, [location.hash]);

    const list = filter === "upcoming" ? UPCOMING : PAST;

    const openDetails = (ev) => {
        setSelectedEvent(ev);
    };

    const closeDetails = () => setSelectedEvent(null);

    // ESC to close modal
    useEffect(() => {
        if (!selectedEvent) return;
        const handler = (e) => {
            if (e.key === "Escape") closeDetails();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedEvent]);

    // when user clicks tab, update state + URL hash
    const handleTabClick = (nextFilter) => {
        setFilter(nextFilter);
        const hash = nextFilter === "past" ? "#past" : "#upcoming";
        navigate(`/events${hash}`, { replace: false });
    };

    return (
        <Styled.Page>
            {/* HERO */}
            <header className="hero">
                <TbCalendarEvent className="heroIcon" />
                <h1 className="heroTitle">Events</h1>
                <p className="heroTagline">
                    Workshops, meetups, bootcamps & community gatherings.
                    <TbSparkles className="sparkIcon" />
                </p>
            </header>

            {/* FILTER TABS */}
            <div className="tabs">
                <button
                    className={filter === "upcoming" ? "tab active" : "tab"}
                    onClick={() => handleTabClick("upcoming")}
                    type="button"
                >
                    Upcoming
                </button>

                <button
                    className={filter === "past" ? "tab active" : "tab"}
                    onClick={() => handleTabClick("past")}
                    type="button"
                >
                    Past
                </button>
            </div>

            {/* EVENTS GRID */}
            <section className="gridSection">
                <div className="grid">
                    {list.map((ev, idx) => (
                        <div key={idx} className="card">
                            <div className="imgWrap">
                                <img src={ev.img} alt={ev.title} />
                                <span className="tag">{ev.tag}</span>
                            </div>

                            <div className="info">
                                <h3 className="evTitle">{ev.title}</h3>

                                <div className="meta">
                                    <span className="metaItem">
                                        <TbCalendarEvent /> {ev.date}
                                    </span>

                                    {ev.time && (
                                        <span className="metaItem">
                                            <TbClock /> {ev.time}
                                        </span>
                                    )}

                                    <span className="metaItem">
                                        <TbMapPin /> {ev.location}
                                    </span>

                                    <span className="metaItem">
                                        <TbUsersGroup /> {ev.attendees}
                                    </span>
                                </div>

                                <button
                                    className="detailsBtn"
                                    type="button"
                                    onClick={() => openDetails(ev)}
                                >
                                    View Details <TbChevronRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DETAILS MODAL */}
            {selectedEvent && (
                <div
                    className="eventModalOverlay"
                    onClick={closeDetails}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="eventModal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="eventModalClose"
                            onClick={closeDetails}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="eventModalImgWrap">
                            <img
                                src={selectedEvent.img}
                                alt={selectedEvent.title}
                            />
                            <span className="eventModalTag">
                                {selectedEvent.tag}
                            </span>
                        </div>

                        <div className="eventModalBody">
                            <h2 className="eventModalTitle">
                                {selectedEvent.title}
                            </h2>

                            <div className="eventModalMeta">
                                <span>
                                    <TbCalendarEvent /> {selectedEvent.date}
                                </span>
                                {selectedEvent.time && (
                                    <span>
                                        <TbClock /> {selectedEvent.time}
                                    </span>
                                )}
                                <span>
                                    <TbMapPin /> {selectedEvent.location}
                                </span>
                                <span>
                                    <TbUsersGroup />
                                    {selectedEvent.attendees}
                                </span>
                            </div>

                            {selectedEvent.description && (
                                <p className="eventModalDesc">
                                    {selectedEvent.description}
                                </p>
                            )}

                            <p className="eventModalNote">
                                To reserve a seat or ask questions, send us a
                                quick email with your name, college / company,
                                and which event you're interested in.
                            </p>

                            <a
                                className="eventModalCta"
                                href={`mailto:hello@jwit.in?subject=JWIT Event - ${encodeURIComponent(
                                    selectedEvent.title
                                )}`}
                            >
                                <TbCalendarEvent />
                                <span>RSVP via Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
};

export default Events;
