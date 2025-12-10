import React, { useState, useEffect } from "react";
import { Styled } from "./styled";
import {
    TbMail,
    TbBrandLinkedin,
    TbUserHeart,
    TbSparkles,
} from "react-icons/tb";

import imgAnanya from "/images/team/ananyaprasad.png";
import imgMadhavi from "/images/team/madhavisingh.png";
import imgSuhani from "/images/team/suhanimishra.png";
import imgRitika from "/images/team/ritikasen.png";
import imgKhushi from "/images/team/khushidas.png";
import imgPriya from "/images/team/priyasoren.png";

const TEAM = [
    {
        name: "Ananya Prasad",
        role: "President",
        email: "ananya@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgAnanya,
        year: "3rd year, CSE",
        focus: "Community building, leadership, outreach",
        bio: "Leads the overall direction of JWIT, anchors collaborations and keeps the community aligned with its mission.",
        funFact: "Loves combining tech with storytelling and runs a small blog of member journeys.",
    },
    {
        name: "Madhavi Singh",
        role: "Vice President",
        email: "madhavi@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgMadhavi,
        year: "3rd year, IT",
        focus: "Operations, planning, logistics",
        bio: "Keeps events, communication and core team operations running smoothly behind the scenes.",
        funFact: "Can create a full Notion board for any idea in under 10 minutes.",
    },
    {
        name: "Suhani Mishra",
        role: "Tech Lead",
        email: "suhani@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgSuhani,
        year: "2nd year, CSE",
        focus: "Coding sessions, project repos, tech mentorship",
        bio: "Designs tech roadmaps, mentors members on projects and maintains the JWIT codebases.",
        funFact: "Loves refactoring old JavaScript into clean React components.",
    },
    {
        name: "Ritika Sen",
        role: "Community Manager",
        email: "ritika@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgRitika,
        year: "2nd year, ECE",
        focus: "Community health, onboarding, events experience",
        bio: "Ensures new members feel welcomed, supported and plugged into the right circles.",
        funFact: "Remembers names and faces from almost every meetup.",
    },
    {
        name: "Khushi Das",
        role: "Workshops Lead",
        email: "khushi@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgKhushi,
        year: "1st year, CSE",
        focus: "Workshop content, speakers, practice tasks",
        bio: "Curates hands-on workshops and keeps them beginner-friendly yet challenging.",
        funFact: "Has a backlog of 50+ workshop ideas in her notes app.",
    },
    {
        name: "Priya Soren",
        role: "Events Lead",
        email: "priya@jwit.in",
        linkedin: "https://linkedin.com",
        img: imgPriya,
        year: "3rd year, Mech",
        focus: "Event experience, offline logistics, decor",
        bio: "Designs end-to-end event flow—from registrations to feedback and photos.",
        funFact: "Can turn any empty classroom into an event space in 20 minutes.",
    },
];

const CoreTeam = () => {
    const [activeMember, setActiveMember] = useState(null);

    // ESC to close modal
    useEffect(() => {
        if (!activeMember) return;
        const handler = (e) => {
            if (e.key === "Escape") setActiveMember(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [activeMember]);

    const handleCardClick = (member) => {
        setActiveMember(member);
    };

    const handleOverlayClick = () => {
        setActiveMember(null);
    };

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <Styled.Page>
            {/* Header Section */}
            <header className="headerSection">
                <TbUserHeart className="headerIcon" />
                <h1 className="title">Meet the Core Team</h1>
                <p className="subtitle">
                    The women powering <span>JWIT</span> with leadership,
                    collaboration, and heart.
                    <TbSparkles className="sparkIcon" />
                </p>
            </header>

            {/* Team Grid */}
            <section className="teamGrid">
                {TEAM.map((member, idx) => (
                    <div
                        className="card"
                        key={idx}
                        onClick={() => handleCardClick(member)}
                    >
                        {/* Image */}
                        <div className="imgWrap">
                            <img src={member.img} alt={member.name} />
                        </div>

                        {/* Info */}
                        <div className="info">
                            <h3 className="name">{member.name}</h3>
                            <p className="role">{member.role}</p>
                        </div>

                        {/* Social Icons */}
                        <div className="social" onClick={stopPropagation}>
                            <a
                                href={`mailto:${member.email}`}
                                className="sIcon"
                            >
                                <TbMail />
                            </a>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="sIcon"
                            >
                                <TbBrandLinkedin />
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            {/* Modal */}
            {activeMember && (
                <div
                    className="modalOverlay"
                    onClick={handleOverlayClick}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal" onClick={stopPropagation}>
                        <button
                            className="modalCloseBtn"
                            type="button"
                            onClick={() => setActiveMember(null)}
                            aria-label="Close member details"
                        >
                            ✕
                        </button>

                        <div className="modalHeader">
                            <div className="modalImgWrap">
                                <img
                                    src={activeMember.img}
                                    alt={activeMember.name}
                                />
                            </div>
                            <div className="modalTitleBlock">
                                <h2 className="modalName">
                                    {activeMember.name}
                                </h2>
                                <p className="modalRole">
                                    {activeMember.role}
                                </p>
                                {activeMember.year && (
                                    <p className="modalMeta">
                                        {activeMember.year}
                                    </p>
                                )}
                                {activeMember.focus && (
                                    <p className="modalMeta">
                                        Focus: {activeMember.focus}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="modalBody">
                            {activeMember.bio && (
                                <p className="modalText">{activeMember.bio}</p>
                            )}

                            {activeMember.funFact && (
                                <p className="modalText funFact">
                                    <span>Fun fact: </span>
                                    {activeMember.funFact}
                                </p>
                            )}

                            <div className="modalActions">
                                <a
                                    href={`mailto:${activeMember.email}`}
                                    className="modalBtn primary"
                                >
                                    <TbMail />
                                    Email {activeMember.name.split(" ")[0]}
                                </a>
                                <a
                                    href={activeMember.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="modalBtn ghost"
                                >
                                    <TbBrandLinkedin />
                                    View LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
};

export default CoreTeam;
