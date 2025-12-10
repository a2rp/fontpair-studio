import React, { useEffect, useState } from "react";
import { Styled } from "./styled";

import {
    TbHeartHandshake,
    TbBuildingSkyscraper,
    TbUsersGroup,
    TbWorld,
    TbMail,
    TbSparkles,
    TbGift,
    TbUserStar,
} from "react-icons/tb";

// Sponsor logos 
import logoTataSteel from "/images/sponsors/tata-steel.png";
import logoTcs from "/images/sponsors/tcs.png";
import logoUshaMartin from "/images/sponsors/usha-martin.png";
import logoLocalNgo from "/images/sponsors/local-ngo.png";

// ---------------------
// DATA
// ---------------------

const MAJOR_SPONSORS = [
    {
        name: "Tata Steel",
        tier: "Title Partner",
        logo: logoTataSteel,
        focus: "STEM education, skilling, and community development.",
        website: "https://www.tatasteel.com",
        support: [
            "Annual funding for flagship JWIT programs",
            "Venue support for large conferences",
            "Mentors from in-house engineering teams",
        ],
    },
    {
        name: "TCS (Tata Consultancy Services)",
        tier: "Gold Partner",
        logo: logoTcs,
        focus: "Technology careers, internships, and upskilling.",
        website: "https://www.tcs.com",
        support: [
            "Technical workshops & hackathons",
            "Industry sessions on careers in tech",
            "Project collaboration opportunities",
        ],
    },
];

const COMMUNITY_PARTNERS = [
    {
        name: "Usha Martin",
        role: "Industry Partner",
        logo: logoUshaMartin,
        website: "https://www.ushamartin.com",
        note: "Supporting women in manufacturing, operations, and plant tech.",
    },
    {
        name: "Sakhi Foundation",
        role: "NGO Partner",
        logo: logoLocalNgo,
        website: "https://example.org",
        note: "Grassroots support for girls' education and digital literacy.",
    },
];

const TIERS = [
    {
        label: "Title Partner",
        icon: TbUserStar,
        perks: [
            "Branding on all JWIT flagship events",
            "Co-branded tech programs in Jamshedpur",
            "Priority access to student & professional talent pool",
        ],
    },
    {
        label: "Gold Partner",
        icon: TbGift,
        perks: [
            "Branding on select campaigns and bootcamps",
            "Quarterly collaboration on workshops",
            "Spotlight in newsletters & social media",
        ],
    },
    {
        label: "Community Partner",
        icon: TbUsersGroup,
        perks: [
            "Logo presence on the website",
            "Joint local initiatives & outreach",
            "Invites to JWIT networking meets",
        ],
    },
];

/**
 * IMPACT STATS
 * Numbers animate from 0 -> target on page load.
 */
const IMPACT_STATS = [
    {
        label: "Women reached",
        target: 1200,
        suffix: "+",
    },
    {
        label: "Events hosted",
        target: 35,
        suffix: "+",
    },
    {
        label: "Local colleges involved",
        target: 10,
        suffix: "+",
    },
];

const Sponsors = () => {
    // animated counters for impact stats
    const [counters, setCounters] = useState(
        IMPACT_STATS.map(() => 0)
    );

    useEffect(() => {
        const duration = 1200; // ms
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);

            setCounters(
                IMPACT_STATS.map((stat) =>
                    Math.floor(stat.target * progress)
                )
            );

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, []);

    const formatValue = (value) =>
        value.toLocaleString("en-IN");

    return (
        <Styled.Page>
            {/* HERO */}
            <header className="hero">
                <TbHeartHandshake className="heroIcon" />
                <h1 className="heroTitle">Sponsors & Partners</h1>
                <p className="heroTagline">
                    The organisations standing behind{" "}
                    <span>Jamshedpur Women in Technology</span>.
                    <TbSparkles className="sparkIcon" />
                </p>
            </header>

            {/* IMPACT STRIP */}
            <section className="impactStrip">
                {IMPACT_STATS.map((stat, index) => (
                    <div key={stat.label} className="impactItem">
                        <div className="impactValue">
                            {formatValue(counters[index])}
                            {stat.suffix}
                        </div>
                        <div className="impactLabel">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* MAJOR SPONSORS */}
            <section className="section">
                <h2 className="secTitle">Major Sponsors</h2>
                <div className="majorGrid">
                    {MAJOR_SPONSORS.map((sp) => (
                        <article key={sp.name} className="sponsorCard">
                            <div className="cardHeader">
                                <div className="logoWrap">
                                    <img src={sp.logo} alt={sp.name} />
                                </div>
                                <div className="cardHeading">
                                    <h3 className="sponsorName">{sp.name}</h3>
                                    <span className="tierBadge">
                                        {sp.tier}
                                    </span>
                                </div>
                            </div>

                            <p className="focus">{sp.focus}</p>

                            <ul className="supportList">
                                {sp.support.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>

                            <a
                                href={sp.website}
                                className="visitBtn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TbWorld />
                                Visit website
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* COMMUNITY PARTNERS */}
            <section className="section">
                <h2 className="secTitle">Community Partners</h2>
                <div className="communityGrid">
                    {COMMUNITY_PARTNERS.map((cp) => (
                        <article key={cp.name} className="communityCard">
                            <div className="communityHeader">
                                <div className="logoMini">
                                    <img src={cp.logo} alt={cp.name} />
                                </div>
                                <div>
                                    <h3 className="communityName">
                                        {cp.name}
                                    </h3>
                                    <p className="communityRole">
                                        {cp.role}
                                    </p>
                                </div>
                            </div>
                            <p className="communityNote">{cp.note}</p>
                            <a
                                href={cp.website}
                                className="communityLink"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TbWorld />
                                Learn more
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* SPONSORSHIP TIERS */}
            <section className="section">
                <h2 className="secTitle">Sponsorship Tiers</h2>
                <div className="tiersGrid">
                    {TIERS.map((tier) => {
                        const Icon = tier.icon;
                        return (
                            <article key={tier.label} className="tierCard">
                                <div className="tierIconWrap">
                                    <Icon />
                                </div>
                                <h3 className="tierLabel">{tier.label}</h3>
                                <ul className="tierList">
                                    {tier.perks.map((p, idx) => (
                                        <li key={idx}>{p}</li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* CTA: BECOME A SPONSOR */}
            <section className="ctaSection">
                <div className="ctaContent">
                    <div className="ctaText">
                        <h2>Partner with JWIT</h2>
                        <p>
                            Whether you're a company, college, or NGO, we'd love
                            to build long-term programs for women in technology
                            in and around Jamshedpur.
                        </p>
                    </div>

                    <div className="ctaActions">
                        <a
                            href="mailto:hello@jwit.in?subject=JWIT%20Sponsorship%20Enquiry"
                            className="ctaBtn primary"
                        >
                            <TbMail />
                            Email the team
                        </a>
                        <a
                            href="#"
                            className="ctaBtn ghost"
                            aria-label="Download JWIT sponsorship deck"
                        >
                            <TbBuildingSkyscraper />
                            Download sponsor deck (PDF)
                        </a>
                    </div>
                </div>
            </section>
        </Styled.Page>
    );
};

export default Sponsors;
