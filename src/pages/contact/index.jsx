import React from "react";
import { Styled } from "./styled";
import {
    TbMail,
    TbBrandInstagram,
    TbBrandLinkedin,
    TbBrandYoutube,
    TbBrandWhatsapp,
    TbUsersGroup,
    TbSparkles,
} from "react-icons/tb";

const CONTACT_LINKS = [
    {
        label: "Email us",
        sub: "General queries & collabs",
        href: "mailto:hello@jwit.in",
        icon: TbMail,
    },
    {
        label: "Instagram",
        sub: "@jamshedpurwomentech",
        href: "#",
        icon: TbBrandInstagram,
    },
    {
        label: "LinkedIn",
        sub: "JWIT – Jamshedpur Women in Technology",
        href: "#",
        icon: TbBrandLinkedin,
    },
    {
        label: "YouTube",
        sub: "Sessions, talks & recaps",
        href: "#",
        icon: TbBrandYoutube,
    },
    {
        label: "WhatsApp circle",
        sub: "Invite-only announcements list",
        href: "#",
        icon: TbBrandWhatsapp,
    },
];

const SOCIAL_WALL = [
    {
        tag: "Workshop Recap",
        title: "Intro to JavaScript",
        meta: "XITE Lab • 60 participants",
    },
    {
        tag: "Campus Meetup",
        title: "Coffee & Career Stories",
        meta: "Bistupur • 35 members",
    },
    {
        tag: "Hands-on",
        title: "Git & GitHub Basics",
        meta: "NIT Jamshedpur • 40 laptops, 0 fear",
    },
    {
        tag: "Factory Visit",
        title: "Women on the Shop Floor",
        meta: "Adityapur • Industry tour",
    },
    {
        tag: "Panel",
        title: "First-Gen Engineers Talk",
        meta: "Centre for Excellence • 4 speakers",
    },
    {
        tag: "Community",
        title: "Study Circle Saturdays",
        meta: "Hybrid • Online + Library",
    },
];

const Contact = () => {
    return (
        <Styled.Page>
            {/* Top banner like */}
            <section className="contactHero">
                <div className="heroCard">
                    <p className="eyebrow">Stay in touch with JWIT</p>
                    <h1 className="heroTitle">Get in touch with JWIT</h1>
                    <p className="heroText">
                        Join the loop for meetups, workshops, hiring updates
                        and small wins from women in tech across Jamshedpur.
                        <TbSparkles className="sparkIcon" />
                    </p>

                    <ul className="linkList">
                        {CONTACT_LINKS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.label} className="linkItem">
                                    <a
                                        href={item.href}
                                        className="linkPill"
                                        target={
                                            item.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.href.startsWith("http")
                                                ? "noreferrer"
                                                : undefined
                                        }
                                    >
                                        <span className="pillIcon">
                                            <Icon />
                                        </span>
                                        <span className="pillText">
                                            <span className="pillLabel">
                                                {item.label}
                                            </span>
                                            <span className="pillSub">
                                                {item.sub}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="heroMeta">
                        <div className="metaItem">
                            <span className="dot" />
                            <span>Student-run, city-rooted community</span>
                        </div>
                        <div className="metaItem">
                            <span className="dot" />
                            <span>Updates 1–2 times a week, no spam</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info strip below */}
            <section className="infoStrip">
                <div className="infoItem">
                    <TbUsersGroup className="infoIcon" />
                    <div>
                        <p className="infoLabel">Meetups & events</p>
                        <p className="infoValue">
                            Mostly weekends • Bistupur, Sakchi, Adityapur
                        </p>
                    </div>
                </div>
                <div className="infoItem">
                    <TbMail className="infoIcon" />
                    <div>
                        <p className="infoLabel">Core team inbox</p>
                        <p className="infoValue">hello@jwit.in</p>
                    </div>
                </div>
            </section>
        </Styled.Page>
    );
};

export default Contact;
