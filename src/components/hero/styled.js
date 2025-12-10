// src/components/hero/styled.js
import styled, { keyframes } from "styled-components";

const floatGlow = keyframes`
    0% {
        transform: translate3d(-20px, -10px, 0) scale(1);
        opacity: 0.45;
    }
    50% {
        transform: translate3d(20px, 10px, 0) scale(1.08);
        opacity: 0.75;
    }
    100% {
        transform: translate3d(-20px, -10px, 0) scale(1);
        opacity: 0.45;
    }
`;

export const Styled = {
    Hero: styled.section`
        position: relative;
        min-height: 100vh;
        background: #000000;
        color: #ffffff;
        display: flex;
        align-items: center;
        padding: 2.5rem 1rem 3rem;
        overflow: hidden;

        @media (width >= 768px) {
            padding: 3.5rem 2rem 4rem;
        }

        /* animated background layer */
        &::before {
            content: "";
            position: absolute;
            inset: -20%;
            background: radial-gradient(
                    circle at 20% 10%,
                    rgba(241, 90, 36, 0.32),
                    transparent 55%
                ),
                radial-gradient(
                    circle at 80% 80%,
                    rgba(110, 167, 255, 0.26),
                    transparent 55%
                ),
                radial-gradient(
                    circle at 50% 120%,
                    rgba(180, 120, 255, 0.18),
                    transparent 55%
                );
            mix-blend-mode: screen;
            opacity: 0.6;
            filter: blur(2px);
            animation: ${floatGlow} 22s ease-in-out infinite alternate;
            pointer-events: none;
            z-index: 0;
        }

        .heroInner {
            position: relative;
            z-index: 1;
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
        }

        .heroMain {
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }

        .heroTitle {
            font-family: "Playfair Display", Georgia, "Times New Roman", serif;
            font-weight: 700;
            line-height: 1.25;
            margin: 0;
            font-size: 7rem;
        }

        @media (max-width: 980px) {
            .heroTitle {
                font-size: 7.5rem;
            }
        }

        @media (max-width: 768px) {
            .heroTitle {
                font-size: 5rem;
            }
        }

        .heroSubtitle {
            margin-top: 0.5rem;
            font-family: "Playfair Display", Georgia, "Times New Roman", serif;
            font-style: italic;
            font-weight: 400;
            line-height: 1.4;
            font-size: 1.5rem;
        }

        @media (max-width: 768px) {
            .heroSubtitle {
                font-size: 1.25rem;
            }
        }

        .heroActions {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
        }

        .heroButton {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.55rem 1.5rem;
            border-radius: 999px;
            border: 1px solid rgba(241, 90, 36, 0.9);
            background: linear-gradient(
                135deg,
                rgba(241, 90, 36, 0.95),
                rgba(255, 106, 26, 0.95)
            );
            color: #ffffff;
            font-size: 0.85rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            cursor: pointer;
            transition: transform 0.18s ease, box-shadow 0.18s ease,
                background 0.18s ease;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.65);
        }

        .heroButton:hover {
            transform: translateY(-1px);
            box-shadow: 0 16px 35px rgba(0, 0, 0, 0.8);
        }

        .heroHint {
            font-size: 0.7rem;
            color: #b0b0b0;
        }

        .heroMeta {
            width: 100%;
            max-width: 38.75rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .heroText {
            font-size: 0.8rem;
            line-height: 1.8;
            color: #d0d0d0;
        }

        .heroMetaGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        @media (width >= 900px) {
            .heroMetaGrid {
                grid-template-columns: 1fr 1fr;
                gap: 1.25rem;
            }
        }

        .heroTextSmall {
            font-size: 0.75rem;
            line-height: 1.8;
            color: #a8a8a8;
        }

        .heroText a,
        .heroTextSmall a {
            color: inherit;
            text-decoration: underline;
        }

        .heroText a:hover,
        .heroTextSmall a:hover {
            text-decoration: underline;
            opacity: 0.9;
        }
    `,
};
