import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";

import {
    TbPhoto,
    TbSparkles,
    TbCalendarEvent,
    TbTools,
    TbUsersGroup,
    TbChevronLeft,
    TbChevronRight,
    TbX,
} from "react-icons/tb";

// ---------- IMAGES  ----------
import imgG1 from "/images/gallery/gallery-1.png";
import imgG2 from "/images/gallery/gallery-2.png";
import imgG3 from "/images/gallery/gallery-3.png";
import imgG4 from "/images/gallery/gallery-4.png";
import imgG5 from "/images/gallery/gallery-5.png";
import imgG6 from "/images/gallery/gallery-6.png";
import imgG7 from "/images/gallery/gallery-7.png";
import imgG8 from "/images/gallery/gallery-8.png";

// ---------- DATA ----------

const FILTERS = [
    { id: "all", label: "All" },
    { id: "events", label: "Events" },
    { id: "workshops", label: "Workshops" },
    { id: "community", label: "Community" },
];

const GALLERY_ITEMS = [
    {
        id: 1,
        src: imgG1,
        alt: "Women planning on sticky notes during a JWIT meetup",
        title: "Planning the next meetup",
        meta: "Community • Bistupur",
        category: "events",
    },
    {
        id: 2,
        src: imgG2,
        alt: "Women carrying boxes at an industrial site",
        title: "On-site industry visit",
        meta: "Industry tour • Telco",
        category: "community",
    },
    {
        id: 3,
        src: imgG3,
        alt: "Woman working on a heavy machine",
        title: "Factory tech walkthrough",
        meta: "Manufacturing • Adityapur",
        category: "events",
    },
    {
        id: 4,
        src: imgG4,
        alt: "Women sorting material on a workbench",
        title: "Process & quality session",
        meta: "Workshop • Plant floor",
        category: "workshops",
    },
    {
        id: 5,
        src: imgG5,
        alt: "Women lifting crates together in a yard",
        title: "Strength in teams",
        meta: "Community • Yard visit",
        category: "community",
    },
    {
        id: 6,
        src: imgG6,
        alt: "Row of women working on a line",
        title: "Assembly line tech tour",
        meta: "Industry • Jamshedpur",
        category: "events",
    },
    {
        id: 7,
        src: imgG7,
        alt: "Women with helmets and vests working on machinery",
        title: "Safety & tooling demo",
        meta: "Workshop • Safety first",
        category: "workshops",
    },
    {
        id: 8,
        src: imgG8,
        alt: "Another group of women on an assembly line",
        title: "Future of work",
        meta: "Industry • Evening shift",
        category: "events",
    },
];

// ---------- COMPONENT ----------

const Gallery = () => {
    const [filter, setFilter] = useState("all");

    // lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filteredItems = useMemo(() => {
        if (filter === "all") return GALLERY_ITEMS;
        return GALLERY_ITEMS.filter((item) => item.category === filter);
    }, [filter]);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const showPrev = () => {
        setLightboxIndex((prev) =>
            prev === 0 ? filteredItems.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setLightboxIndex((prev) =>
            prev === filteredItems.length - 1 ? 0 : prev + 1
        );
    };

    // ESC key to close
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, showPrev, showNext]);

    const currentItem = filteredItems[lightboxIndex];

    return (
        <Styled.Page>
            {/* HERO */}
            <header className="hero">
                <TbPhoto className="heroIcon" />
                <h1 className="heroTitle">Gallery</h1>
                <p className="heroTagline">
                    A glimpse into JWIT meetups, workshops and industry visits.
                    <TbSparkles className="sparkIcon" />
                </p>
            </header>

            {/* FILTERS */}
            <div className="filters">
                {FILTERS.map((f) => (
                    <button
                        key={f.id}
                        type="button"
                        className={
                            "filterBtn" +
                            (filter === f.id ? " filterBtn--active" : "")
                        }
                        onClick={() => setFilter(f.id)}
                    >
                        {f.id === "events" && (
                            <TbCalendarEvent className="filterIcon" />
                        )}
                        {f.id === "workshops" && (
                            <TbTools className="filterIcon" />
                        )}
                        {f.id === "community" && (
                            <TbUsersGroup className="filterIcon" />
                        )}
                        {f.id === "all" && (
                            <TbPhoto className="filterIcon" />
                        )}
                        <span>{f.label}</span>
                    </button>
                ))}
            </div>

            {/* GRID */}
            <section className="gridSection">
                <div className="grid">
                    {filteredItems.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            className="tile"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="imgWrap">
                                <img src={item.src} alt={item.alt} />
                                <div className="overlay">
                                    <div className="overlayInner">
                                        <h3>{item.title}</h3>
                                        <p>{item.meta}</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX / MODAL */}
            {lightboxOpen && currentItem && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeLightbox}
                >
                    <div
                        className="lightboxInner"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="lightboxClose"
                            onClick={closeLightbox}
                            aria-label="Close gallery preview"
                        >
                            <TbX />
                        </button>

                        <div className="lightboxImageWrap">
                            <img
                                src={currentItem.src}
                                alt={currentItem.alt}
                            />
                        </div>

                        <div className="lightboxMeta">
                            <h3>{currentItem.title}</h3>
                            <p>{currentItem.meta}</p>
                        </div>

                        <button
                            type="button"
                            className="lightboxNav lightboxNav--prev"
                            onClick={showPrev}
                            aria-label="Previous image"
                        >
                            <TbChevronLeft />
                        </button>
                        <button
                            type="button"
                            className="lightboxNav lightboxNav--next"
                            onClick={showNext}
                            aria-label="Next image"
                        >
                            <TbChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
};

export default Gallery;
