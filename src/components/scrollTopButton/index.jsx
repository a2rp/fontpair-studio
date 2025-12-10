// src/components/scrollTopButton/index.jsx
import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import { smoothScrollTo } from "../../utils/smoothScroll";

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        smoothScrollTo(0, 450);
    };

    if (!visible) return null;

    return (
        <Styled.Wrap>
            <button
                type="button"
                className="scrollTopButton"
                onClick={handleClick}
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </Styled.Wrap>
    );
};

export default ScrollTopButton;
