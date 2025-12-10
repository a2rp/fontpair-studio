import React from "react";
import { Styled } from "./styled";

import devLogo from "/images/logo_ar.png";
import upiQr from "/images/upi-qr.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

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

    return (
        <Styled.Footer>
            <div className="heroSection">
                {/* === About me === */}
                <div className="aboutMeWrapper">
                    <div className="aboutMeImageWrapper">
                        <img src={devLogo} alt="" />
                    </div>
                    <div className="aboutMeTextWrapper">
                        I'm Ashish Ranjan,
                        a Full-Stack Web Developer.
                        I currently focus on building MERN stack applications (MongoDB, Express.js, React.js, Node.js).
                    </div>

                    <div className="websiteLinks">
                        My Website:{" "}
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ashishranjan.net
                        </a>
                        <br />
                        My Old Website:{" "}
                        <a
                            href="http://www.ashishranjan.in"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ashishranjan.in
                        </a>
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

                {/* === YouTube subscribe card === */}
                <div className="youtubeWrapper">
                    <div className="youtubeText">I've recently started posting videos on YouTube.</div>

                    <div className="ytChannelCard">
                        <div className="row1">
                            <a
                                className="ytInfo"
                                href="https://www.youtube.com/@ashishranjan-ashz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube className="youtubeIcon" size={60} />
                                <span className="ytText">
                                    <span className="ytTitle">YouTube</span>
                                    {/* <span className="ytSubtitle">
                                        youtube.com/@ashishranjan-ashz
                                    </span> */}
                                </span>
                            </a>

                            <a
                                className="ytSubscribeBtn"
                                href="https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SUBSCRIBE
                            </a>
                        </div>

                        <div className="afterSubscribe">
                            {/* Please <FaThumbsUp /> <FaComment /> <FaShare /> my
                            videos… thanks */}
                            Please <FaThumbsUp /> <FaComment /> <FaShare /> - thanks for the support! 🙏
                        </div>
                    </div>
                </div>

                {/* === QR / UPI === */}
                <div className="qrCodeWrapper">
                    <p className="qrText">Support my work</p>
                    <img src={upiQr} alt="" />
                </div>
            </div>

            <div className="footerBottom">
                <div>
                    <span>© {year} | Ashish Ranjan</span>
                </div>

                <div>
                    {LAST_UPDATED_TEXT && (
                        <div className="pageMeta">
                            <span className="pageMetaLabel">Last updated:</span>
                            <span className="pageMetaValue">
                                {LAST_UPDATED_TEXT}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Styled.Footer>
    );
};

export default Footer;
