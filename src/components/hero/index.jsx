// src/components/hero/index.jsx
import React from "react";
import { Styled } from "./styled";
import { smoothScrollTo } from "../../utils/smoothScroll";

const Hero = () => {
    const handleScrollToPairs = () => {
        const target = document.getElementById("pairs-start");
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const currentY = window.scrollY || window.pageYOffset || 0;
        const targetY = rect.top + currentY;

        smoothScrollTo(targetY, 500);
    };

    return (
        <Styled.Hero>
            <div className="heroInner">
                <div className="heroMain">
                    <h1 className="heroTitle">FontPair Studio</h1>
                    <p className="heroSubtitle">
                        font combinations for real projects
                    </p>

                    <div className="heroActions">
                        <button
                            type="button"
                            className="heroButton"
                            onClick={handleScrollToPairs}
                        >
                            Browse font pairs
                        </button>
                        <span className="heroHint">
                            Scroll down to see curated Google Font combinations
                            with CSS snippets.
                        </span>
                    </div>
                </div>

                <div className="heroMeta">
                    <p className="heroText">
                        Explore curated Google Font combinations with realistic
                        UI previews. Copy the CSS, open the typefaces on Google
                        Fonts and reuse the ideas in your own projects.
                    </p>

                    <div className="heroMetaGrid">
                        <p className="heroTextSmall">
                            All fonts are available on{" "}
                            <a
                                href="https://fonts.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google Fonts
                            </a>
                            . Each pair is tagged by use-case and mood to make
                            selection easier.
                        </p>
                        <p className="heroTextSmall">
                            Built and maintained by{" "}
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ashish Ranjan
                            </a>
                            . Refactored from a freelance typography helper into
                            an open-source playground.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Hero>
    );
};

export default Hero;
