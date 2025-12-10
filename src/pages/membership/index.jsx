import React, { useState, useEffect } from "react";
import { Styled } from "./styled";
import {
    TbHeartHandshake,
    TbUsersGroup,
    TbBook2,
    TbCertificate,
    TbCalendarEvent,
    TbMail,
    TbSparkles,
} from "react-icons/tb";

const BENEFITS = [
    {
        icon: TbUsersGroup,
        title: "Community Access",
        desc: "Join hundreds of women in tech from Jamshedpur—share ideas, collaborate, and grow.",
    },
    {
        icon: TbBook2,
        title: "Learning Resources",
        desc: "Curated guides, workshops, and study groups designed for constant upskilling.",
    },
    {
        icon: TbCalendarEvent,
        title: "Exclusive Events",
        desc: "Meetups, bootcamps, speaker sessions, and hands-on technical events.",
    },
    {
        icon: TbCertificate,
        title: "Certificates",
        desc: "Earn digital certificates for attending workshops and contributing.",
    },
    {
        icon: TbHeartHandshake,
        title: "Mentorship",
        desc: "Get guided by industry professionals through structured mentorship programs.",
    },
];

const Membership = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const openPlanModal = (planName) => {
        setSelectedPlan(planName);
    };

    const closeModal = () => setSelectedPlan(null);

    // ESC to close
    useEffect(() => {
        if (!selectedPlan) return;
        const handler = (e) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedPlan]);

    const emailSubject = selectedPlan
        ? `JWIT Membership – ${selectedPlan}`
        : "";
    const emailBody = selectedPlan
        ? `Hi JWIT team,%0D%0A%0D%0AI would like to apply for the "${selectedPlan}" membership plan.%0D%0A%0D%0AName:%0D%0ACollege / Organisation:%0D%0AYear / Role:%0D%0AWhy I want to join:%0D%0A%0D%0ARegards,%0D%0A`
        : "";

    return (
        <Styled.Page>
            {/* Hero Section */}
            <header className="hero">
                <h1 className="title">
                    Become a <span>JWIT Member</span>
                </h1>
                <p className="tagline">
                    Join our mission to empower women in technology.
                    <TbSparkles className="spark" />
                </p>
            </header>

            {/* Benefits */}
            <section className="benefitsSec">
                <h2 className="secTitle">Membership Benefits</h2>

                <div className="benefitsGrid">
                    {BENEFITS.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <div className="benefitCard" key={i}>
                                <div className="iconWrap">
                                    <Icon />
                                </div>
                                <h3 className="bTitle">{b.title}</h3>
                                <p className="bDesc">{b.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Plans */}
            <section className="plansSec">
                <h2 className="secTitle">Choose Your Membership</h2>

                <div className="plansGrid">
                    <div className="planCard">
                        <h3 className="planName">General Member</h3>
                        <p className="planDesc">
                            Open for all women interested in tech.
                        </p>
                        <ul className="planList">
                            <li>Access to community Discord</li>
                            <li>Event participation</li>
                            <li>Learning materials</li>
                        </ul>
                        <button
                            className="joinBtn"
                            type="button"
                            onClick={() => openPlanModal("General Member")}
                        >
                            Join for Free
                        </button>
                    </div>

                    <div className="planCard highlight">
                        <h3 className="planName">Active Contributor</h3>
                        <p className="planDesc">
                            For members contributing to projects & events.
                        </p>
                        <ul className="planList">
                            <li>Early event access</li>
                            <li>Contributor certificate</li>
                            <li>Special roles in server</li>
                        </ul>
                        <button
                            className="joinBtn"
                            type="button"
                            onClick={() => openPlanModal("Active Contributor")}
                        >
                            Apply Now
                        </button>
                    </div>

                    <div className="planCard">
                        <h3 className="planName">Campus Ambassador</h3>
                        <p className="planDesc">
                            Represent JWIT at your college campus.
                        </p>
                        <ul className="planList">
                            <li>Ambassador certificate</li>
                            <li>Invitation-only events</li>
                            <li>Leadership opportunities</li>
                        </ul>
                        <button
                            className="joinBtn"
                            type="button"
                            onClick={() => openPlanModal("Campus Ambassador")}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="ctaSec">
                <h2>Still have questions?</h2>
                <p>We're happy to guide you.</p>
                <a href="mailto:hello@jwit.in" className="ctaBtn">
                    <TbMail />
                    Contact Us
                </a>
            </section>

            {/* PLAN MODAL */}
            {selectedPlan && (
                <div
                    className="planModalOverlay"
                    onClick={closeModal}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="planModal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="planModalClose"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <h2 className="planModalTitle">
                            Apply for {selectedPlan}
                        </h2>
                        <p className="planModalText">
                            Fill a short email and our team will reply with the
                            next steps, timelines, and any details we need from
                            you.
                        </p>

                        <ul className="planSteps">
                            <li>Share your name and current college / role.</li>
                            <li>
                                Add links to any GitHub / portfolio or social
                                you want us to see.
                            </li>
                            <li>
                                Tell us in 2–3 lines why this plan fits you
                                right now.
                            </li>
                        </ul>

                        <a
                            className="planModalEmailBtn"
                            href={`mailto:hello@jwit.in?subject=${emailSubject}&body=${emailBody}`}
                        >
                            <TbMail />
                            <span>Continue via Email</span>
                        </a>

                        <p className="planModalNote">
                            We usually respond within a few days. Keep an eye on
                            your inbox and spam folder.
                        </p>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
};

export default Membership;
