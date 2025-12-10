import React from "react";
import { Styled } from "./styled";
import {
    TbCalendarEvent,
    TbClockHour4,
    TbMapPin,
    TbCode,
    TbUsersGroup,
    TbMail,
} from "react-icons/tb";
import { NavLink } from "react-router-dom";
import HeroSlider from "../../components/heroSlider";

const Home = () => {
    return (
        <Styled.Page>
            {/* Top banner heading */}
            <section className="heroBar">
                <h1 className="heroTitle">
                    Jamshedpur Women in Technology
                </h1>
            </section>

            {/* Intro text */}
            <section className="introBlock">
                <p>
                    Jamshedpur Women in Technology (JWIT) is a student-led
                    community for women and non-binary folks who are curious
                    about technology. We bring together people who are just
                    starting out, actively upskilling, or already building real
                    projects.
                </p>
                <p>
                    From beginner-friendly coding sessions to resume reviews
                    and project showcases, JWIT is a safe space to ask
                    questions, experiment, and grow in public.
                </p>
            </section>

            <section className="sliderSection">
                <HeroSlider />
            </section>

            {/* Info cards (no array / code look) */}
            <section className="infoSection">
                <div className="infoGrid">
                    <div className="infoItem">
                        <div className="infoIcon">
                            <TbMapPin />
                        </div>
                        <div className="infoTitle">Based in</div>
                        <div className="infoText">
                            Jamshedpur, Jharkhand – open to students from any
                            college in and around the city.
                        </div>
                    </div>

                    <div className="infoItem">
                        <div className="infoIcon">
                            <TbCode />
                        </div>
                        <div className="infoTitle">What we explore</div>
                        <div className="infoText">
                            Web dev, programming basics, open-source, interview
                            prep, design, and anything that helps you ship.
                        </div>
                    </div>

                    <div className="infoItem">
                        <div className="infoIcon">
                            <TbUsersGroup />
                        </div>
                        <div className="infoTitle">How we learn</div>
                        <div className="infoText">
                            Peer-to-peer sessions, hands-on workshops, project
                            circles, and mentoring from seniors & alumni.
                        </div>
                    </div>

                    <div className="infoItem">
                        <div className="infoIcon">
                            <TbMail />
                        </div>
                        <div className="infoTitle">Stay in touch</div>
                        <div className="infoText">
                            Event updates go out on our Discord, Instagram, and
                            mailing list. You can also write to{" "}
                            <span className="infoEmail">hello@jwit.in</span>.
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission panel */}
            <section className="missionSection">
                <div className="missionCard">
                    <h2 className="missionTitle">Our Mission</h2>
                    <p className="missionText">
                        Our mission is to make tech spaces in and around
                        Jamshedpur more inclusive, supportive, and accessible
                        for women. We want members to feel confident opening
                        laptops, asking questions, and showing their work.
                    </p>
                    <p className="missionText">
                        JWIT focuses on consistent practice over perfection –
                        small weekly wins, collaborative projects, and a
                        community that celebrates your progress.
                    </p>
                </div>
            </section>

            {/* Join us section */}
            <section className="joinSection">
                <h2 className="joinTitle">Join us!</h2>

                <div className="joinGrid">
                    <NavLink
                        to="/events"
                        className="joinItem joinLink"
                    >
                        <div className="iconWrap">
                            <TbCalendarEvent />
                        </div>
                        <div className="joinLabel">Meetup Day</div>
                        <div className="joinValue">Every Saturday</div>
                        <div className="joinHint">View upcoming events</div>
                    </NavLink>

                    <div className="joinItem">
                        <div className="iconWrap">
                            <TbClockHour4 />
                        </div>
                        <div className="joinLabel">Typical Time</div>
                        <div className="joinValue">4:00pm – 6:00pm</div>
                        <div className="joinHint">
                            Timing may shift based on workshop slots.
                        </div>
                    </div>

                    <div className="joinItem">
                        <div className="iconWrap">
                            <TbMapPin />
                        </div>
                        <div className="joinLabel">Venue</div>
                        <div className="joinValue">
                            CS Block, Jamshedpur Campus
                        </div>
                        <div className="joinHint">
                            Exact room number is announced with each event.
                        </div>
                    </div>
                </div>

                <p className="joinNote">
                    New members can walk into any meetup — no prior experience
                    needed. To get the full details and reminders, join the
                    community through the buttons below.
                </p>

                <div className="ctaRow">
                    <NavLink to="/membership" className="primaryCta">
                        Become a member
                    </NavLink>
                    <NavLink to="/contact" className="ghostCta">
                        Ask a question
                    </NavLink>
                </div>
            </section>
        </Styled.Page>
    );
};

export default Home;
