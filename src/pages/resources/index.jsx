import React, { useState, useEffect } from "react";
import { Styled } from "./styled";

import {
    TbBook2,
    TbCode,
    TbDatabase,
    TbBulb,
    TbDownload,
    TbLink,
    TbSchool,
    TbSparkles,
    TbBuildingSkyscraper,
    TbLibrary,
    TbBallBasketball,
    TbUsersGroup,
    TbCurrencyRupee,
    TbMapPin,
} from "react-icons/tb";
import { MdMuseum } from "react-icons/md";

// ----------------------------
// LEARNING TRACKS
// ----------------------------
const LEARNING_TRACKS = [
    {
        icon: TbCode,
        title: "Web Development",
        desc: "HTML, CSS, JS, React and modern frontend stacks.",
        link: "#",
        detailIntro:
            "Start from absolute basics and move towards building full single-page apps. This track is ideal for students who want to ship real projects and portfolios.",
        modules: [
            "HTML & semantic structure",
            "Modern CSS (Flexbox, Grid, responsive layouts)",
            "JavaScript fundamentals & DOM",
            "React basics, hooks and component patterns",
            "Deploying projects on Netlify / GitHub Pages",
        ],
        pdfTitle: "Web Dev Track – Syllabus PDF",
        pdfSize: "1.8 MB",
        pdfLink: "#",
    },
    {
        icon: TbDatabase,
        title: "Data & Databases",
        desc: "SQL, NoSQL, database design, and analytics.",
        link: "#",
        detailIntro:
            "Understand how data is stored, queried and visualised. Helpful for backend, analytics and any serious product work.",
        modules: [
            "Relational database concepts (tables, keys, joins)",
            "Writing SQL queries with practice problems",
            "Intro to NoSQL & document databases",
            "ER diagrams and schema design basics",
            "Small data project with dashboards / charts",
        ],
        pdfTitle: "Data & DB Track – Syllabus PDF",
        pdfSize: "1.4 MB",
        pdfLink: "#",
    },
    {
        icon: TbBulb,
        title: "Soft Skills",
        desc: "Communication, leadership and interview confidence.",
        link: "#",
        detailIntro:
            "Tech skills open doors, soft skills keep them open. This track focuses on confidence, visibility and clear communication.",
        modules: [
            "Speaking about your projects without fear",
            "Resume and LinkedIn polish sessions",
            "Mock interviews & feedback loops",
            "Team collaboration & conflict basics",
            "Public speaking practice in small circles",
        ],
        pdfTitle: "Soft Skills Track – Workbook PDF",
        pdfSize: "2.1 MB",
        pdfLink: "#",
    },
    {
        icon: TbSchool,
        title: "Beginner Roadmaps",
        desc: "Guided basics for school & college students.",
        link: "#",
        detailIntro:
            "A simple, step-by-step path for students who are just touching computers, coding and tech opportunities for the first time.",
        modules: [
            "Computer basics & internet safety",
            "Logic-building with puzzles and games",
            "First steps in HTML & scratch-style coding",
            "Simple JS programs & problem solving",
            "How to choose branches, colleges & next steps",
        ],
        pdfTitle: "Beginner Roadmaps – Guide PDF",
        pdfSize: "1.2 MB",
        pdfLink: "#",
    },
];

// ----------------------------
// LOCAL RESOURCES
// ----------------------------
const LOCAL_RESOURCES = [
    {
        icon: TbSchool,
        title: "Schools",
        places: [
            "DBMS English School",
            "Sacred Heart Convent",
            "Carmel Junior College",
            "Motilal Nehru Public School",
        ],
    },
    {
        icon: TbBuildingSkyscraper,
        title: "Colleges",
        places: [
            "NIT Jamshedpur",
            "XITE College",
            "Karim City College",
            "Jamshedpur Women's College",
        ],
    },
    {
        icon: TbLibrary,
        title: "Libraries",
        places: [
            "JRD Tata Public Library",
            "Beldih Club Reading Room",
            "College campus libraries",
        ],
    },
    {
        icon: MdMuseum,
        title: "Museums",
        places: [
            "Tata Steel Zoological Museum",
            "Centre for Excellence Museum",
            "Tribal Culture Museum",
        ],
    },
    {
        icon: TbBallBasketball,
        title: "Sports & Recreation",
        places: [
            "Gopal Maidan",
            "Keenan Stadium",
            "JRD Sports Complex",
            "Jubilee Park",
        ],
    },
    {
        icon: TbUsersGroup,
        title: "Local Clubs",
        places: [
            "Beldih Club",
            "United Club",
            "Golmuri Club",
            "Tata Club House",
        ],
    },
    {
        icon: TbCurrencyRupee,
        title: "Funding Resources",
        places: [
            "Tata Steel CSR Programs",
            "Startup Jharkhand Grants",
            "College Innovation Funds",
            "Women Entrepreneurship Schemes",
        ],
    },
];

// ----------------------------
// DOWNLOADS
// ----------------------------
const DOWNLOADS = [
    { title: "JWIT Branding Kit", size: "12 MB", link: "#" },
    { title: "Event Playbook PDF", size: "4.2 MB", link: "#" },
    { title: "Contributor Handbook", size: "3.8 MB", link: "#" },
];

// ----------------------------
// USEFUL EXTERNAL LINKS
// ----------------------------
const USEFUL_LINKS = [
    { title: "Women in Tech India", link: "https://womenintech.org" },
    { title: "GitHub Learning Lab", link: "https://lab.github.com" },
    { title: "FreeCodeCamp", link: "https://freecodecamp.org" },
    { title: "Google Developer Groups", link: "https://gdg.community.dev" },
];

const Resources = () => {
    const [activeTrack, setActiveTrack] = useState(null);

    const closeModal = () => setActiveTrack(null);

    // Close on ESC
    useEffect(() => {
        if (!activeTrack) return;

        const handler = (e) => {
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [activeTrack]);

    return (
        <Styled.Page>
            {/* HERO */}
            <header className="hero">
                <TbBook2 className="heroIcon" />
                <h1 className="heroTitle">Resources</h1>
                <p className="heroTagline">
                    Everything you need to grow — from learning to local
                    support.
                    <TbSparkles className="sparkIcon" />
                </p>
            </header>

            {/* LEARNING TRACKS */}
            <section className="tracksSec">
                <h2 className="secTitle">Learning Tracks</h2>

                <div className="grid">
                    {LEARNING_TRACKS.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div className="card" key={i}>
                                <div className="iconWrap">
                                    <Icon />
                                </div>
                                <h3 className="cardTitle">{item.title}</h3>
                                <p className="cardDesc">{item.desc}</p>
                                <button
                                    type="button"
                                    className="learnMore"
                                    onClick={() => setActiveTrack(item)}
                                >
                                    Explore now →
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* LOCAL RESOURCES */}
            <section className="localSec">
                <h2 className="secTitle">Local Resources (Jamshedpur)</h2>

                <div className="grid">
                    {LOCAL_RESOURCES.map((res, i) => {
                        const Icon = res.icon;
                        return (
                            <div className="localCard" key={i}>
                                <div className="iconWrap alt">
                                    <Icon />
                                </div>
                                <h3 className="localTitle">{res.title}</h3>

                                <ul className="localList">
                                    {res.places.map((p, idx) => (
                                        <li key={idx}>
                                            <TbMapPin />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* DOWNLOADS */}
            <section className="downloadsSec">
                <h2 className="secTitle">Downloads</h2>

                <div className="dlWrap">
                    {DOWNLOADS.map((d, i) => (
                        <a href={d.link} className="dlItem" key={i}>
                            <TbDownload />
                            <span className="dlText">{d.title}</span>
                            <span className="dlSize">({d.size})</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* USEFUL LINKS */}
            <section className="linksSec">
                <h2 className="secTitle">Useful External Links</h2>

                <ul className="linksList">
                    {USEFUL_LINKS.map((l, i) => (
                        <li key={i}>
                            <a
                                className="extLink"
                                target="_blank"
                                rel="noreferrer"
                                href={l.link}
                            >
                                <TbLink />
                                {l.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* MODAL: LEARNING TRACK DETAILS */}
            {activeTrack && (
                <div
                    className="modalOverlay"
                    onClick={closeModal}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="modalClose"
                            onClick={closeModal}
                            aria-label="Close details"
                        >
                            ✕
                        </button>

                        <div className="modalHeader">
                            <div className="modalIcon">
                                <activeTrack.icon />
                            </div>
                            <div>
                                <h2 className="modalTitle">
                                    {activeTrack.title}
                                </h2>
                                <p className="modalSubtitle">
                                    {activeTrack.desc}
                                </p>
                            </div>
                        </div>

                        <div className="modalBody">
                            <p className="modalIntro">
                                {activeTrack.detailIntro}
                            </p>

                            {activeTrack.modules?.length > 0 && (
                                <ul className="moduleList">
                                    {activeTrack.modules.map(
                                        (mod, index) => (
                                            <li key={index}>{mod}</li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>

                        <div className="modalFooter">
                            <a
                                href={activeTrack.pdfLink}
                                className="pdfBtn"
                            >
                                <TbDownload />
                                <span>{activeTrack.pdfTitle}</span>
                                <span className="pdfSize">
                                    ({activeTrack.pdfSize})
                                </span>
                            </a>

                            <p className="modalNote">
                                PDF includes session plan, suggested
                                prerequisites and checklist for mentors.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
};

export default Resources;
