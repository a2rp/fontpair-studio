import React from "react";
import { Styled } from "./styled";

import {
    TbBrandGithub,
    TbBrandLinkedin,
    TbWorld,
} from "react-icons/tb";

// === IMAGES ===
import devLogo from "/images/logo_ar.png";
import upiQr from "/images/upi-qr.png";

import { MdFacebook, MdYoutubeSearchedFor } from "react-icons/md";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";

const LINKS = [
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: TbBrandGithub,
    },
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
        icon: TbWorld,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: TbBrandLinkedin,
    },
];

const YT_CHANNEL = {
    label: "YouTube – Ashish Ranjan",
    href: "https://www.youtube.com/@ashishranjan-ashz",
};

// == date formatter (Sep 20, 2025 18:23:04 hrs) ==
const formatDateTime = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";

    const datePart = d.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    const timePart = d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return `${datePart} ${timePart} hrs`;
};

// Prefer commit time, fall back to build or now
const rawIso =
    typeof __APP_COMMIT_ISO__ !== "undefined"
        ? __APP_COMMIT_ISO__
        : typeof __APP_BUILD_ISO__ !== "undefined"
            ? __APP_BUILD_ISO__
            : new Date().toISOString();

const LAST_UPDATED_TEXT = formatDateTime(rawIso);

const AboutDeveloper = () => {
    return (
        <Styled.Page>
            {/* LAST UPDATED STRIP */}
            {LAST_UPDATED_TEXT && (
                <div className="pageMeta">
                    <span className="pageMetaLabel">Last updated:</span>
                    <span className="pageMetaValue">
                        {LAST_UPDATED_TEXT}
                    </span>
                </div>
            )}

            {/* ===== TOP HERO STRIP (KEEPING YOUR LAYOUT) ===== */}
            <div className="heroSection">
                <div className="aboutMeWrapper">
                    <div className="aboutMeImageWrapper">
                        <img src={devLogo} alt="" />
                    </div>
                    <div className="aboutMeTextWrapper">
                        I am Ashish Ranjan.
                        <br />
                        A Full-Stack Web Developer.
                        <br />
                        These days I mainly build MERN stack applications
                        {" "}
                        (MongoDB, Express.js, React.js, Node.js).
                    </div>
                    <div className="socialMediaLinks">
                        <a
                            href="https://www.facebook.com/theash.ashish/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare className="socialIcon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aashishranjan/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="socialIcon" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="socialIcon" />
                        </a>
                        <a
                            href="https://github.com/a2rp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="socialIcon" />
                        </a>
                    </div>
                </div>

                <div className="youtubeWrapper">
                    <div className="youtubeTextWrapper">
                        <a
                            className="youtubeLogo"
                            href="https://www.youtube.com/@ashishranjan-ashz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="youtubeIcon" size={50} /> <span>YouTube</span>
                        </a>
                        <div className="youtubeText">
                            I've also started posting regularly on my YouTube
                            channel.
                        </div>
                        <br />
                        <a
                            href="https://www.youtube.com/@ashishranjan-ashz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            youtube.com/@ashishranjan-ashz
                        </a>
                    </div>
                    <a className="block likeBlock"
                        href="https://www.youtube.com/@ashishranjan-ashz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="blockText textLeft">LIKE</div>
                        <div className="iconRight">
                            <FaThumbsUp className="youtubeChildIcon" size={25} />
                        </div>
                    </a>
                    <a className="block commentBlock"
                        href="https://www.youtube.com/@ashishranjan-ashz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="blockText textRight">COMMENT</div>
                        <div className="iconLeft">
                            <FaComment className="youtubeChildIcon" size={25} />
                        </div>
                    </a>
                    <a className="block shareBlock"
                        href="https://www.youtube.com/@ashishranjan-ashz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="blockText textLeft">SHARE</div>
                        <div className="iconRight">
                            <FaShare className="youtubeChildIcon" size={25} />
                        </div>
                    </a>
                    <a className="block subscribeBlock"
                        href="https://www.youtube.com/@ashishranjan-ashz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="blockText textRight">SUBSCRIBE</div>
                        <div className="iconLeft">
                            <BiSolidBellRing className="youtubeChildIcon" size={25} />
                        </div>
                    </a>
                </div>

                <div className="qrCodeWrapper">
                    <p className="qrText">
                        Optional support for my work (UPI)
                    </p>
                    <img src={upiQr} alt="" />
                </div>
            </div>

            {/* ===== ABOUT THE DEVELOPER CONTENT (NEW) ===== */}
            <section className="detailsSection">
                <h2 className="sectionTitle">About the developer</h2>
                <p className="sectionLead">
                    Unemployed right now, but not idle. I use projects like
                    this JWIT site to sharpen my frontend skills, experiment
                    with UX, and build a serious portfolio of React + Vite
                    projects.
                </p>

                <div className="detailsGrid">
                    <div className="infoCard">
                        <h3 className="cardTitle">Currently</h3>
                        <ul className="bulletList">
                            <li>Open to full-time and remote roles.</li>
                            <li>Taking freelance work for React / MERN apps.</li>
                            <li>Focusing on clean UI, DX and re-usable patterns.</li>
                        </ul>
                    </div>

                    <div className="infoCard">
                        <h3 className="cardTitle">Core stack</h3>
                        <div className="tagsRow">
                            <span className="pillTag">React + Vite</span>
                            <span className="pillTag">Styled-components</span>
                            <span className="pillTag">Node &amp; Express</span>
                            <span className="pillTag">MongoDB</span>
                            <span className="pillTag">REST APIs</span>
                        </div>
                        <p className="cardText">
                            I like building small, focused tools that can be
                            combined into bigger systems: dashboards, auth
                            flows, payment pages, and internal tools.
                        </p>
                    </div>

                    <div className="infoCard">
                        <h3 className="cardTitle">About this project</h3>
                        <p className="cardText">
                            JWIT started as a freelance reference — a community
                            site for a women-in-tech group in Jamshedpur. This
                            version is a refactored, cleaner React + Vite
                            implementation with sliders, modals, counters,
                            events, sponsors, and gallery pages.
                        </p>
                        <p className="cardText">
                            The goal is to show how I think about structure,
                            routing, and micro-interactions in a real-world
                            multi-page website.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== LINKS / WHERE TO FIND ME ===== */}
            <section className="linksSection">
                <h2 className="sectionTitle">Find me online</h2>
                <div className="linksGrid">
                    {LINKS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkCard"
                            >
                                <span className="linkIcon">
                                    <Icon />
                                </span>
                                <span className="linkLabel">{item.label}</span>
                            </a>
                        );
                    })}

                    <a
                        href={YT_CHANNEL.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkCard linkCard--yt"
                    >
                        <span className="linkIcon">
                            <MdYoutubeSearchedFor />
                        </span>
                        <span className="linkLabel">
                            {YT_CHANNEL.label}
                        </span>
                    </a>
                </div>

                <p className="supportNote">
                    If you liked this site or it helped you, you can support my
                    work using the UPI QR on top — totally optional, always
                    appreciated.
                </p>
            </section>
        </Styled.Page>
    );
};

export default AboutDeveloper;
