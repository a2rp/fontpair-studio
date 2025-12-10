import styled from "styled-components";

export const Styled = {
    Page: styled.main`
        min-height: 100vh;
        /* padding-top: 80px; */
        padding-bottom: 40px;
        background-color: var(--color-bg);
        color: var(--color-text);

        display: flex;
        flex-direction: column;
        align-items: stretch;

        .heroBar {
            width: 100%;
            background-color: var(--color-primary);
            color: var(--color-primary-text);
            padding: 18px 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
            position: relative;
            overflow: hidden;
        }

        .heroBar::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                circle at 0 0,
                rgba(255, 255, 255, 0.16),
                transparent 55%
            );
            pointer-events: none;
        }

        .heroTitle {
            font-size: 1rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 1.4;
            color: var(--color-primary-text);
            position: relative;
            z-index: 1;

            @media (width >= 768px) {
                font-size: 1.15rem;
            }
        }

        /* Shared layout wrapper */
        section {
            width: 100%;
        }

        .introBlock,
        .infoSection,
        .missionSection,
        .joinSection,
        .sliderSection {
            max-width: 960px;
            margin: 0 auto;
            padding-inline: 16px;

            @media (width >= 768px) {
                padding-inline: 24px;
            }
        }

        .sliderSection {
            margin-top: 18px;
        }

        .introBlock {
            margin-top: 24px;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            color: var(--color-text);

            @media (width >= 768px) {
                text-align: left;
            }
        }

        /* Info cards */

        .infoSection {
            margin-top: 22px;
        }

        .infoGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;

            @media (width >= 720px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        .infoItem {
            background-color: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 12px;
            padding: 12px 12px 14px;
            border: 1px solid var(--color-border);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.16);
            display: flex;
            flex-direction: column;
            gap: 4px;
            transition: transform 0.16s ease, box-shadow 0.16s ease,
                border-color 0.16s ease, background-color 0.16s ease;
        }

        .infoItem:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
            border-color: var(--color-primary);
            background-color: var(--color-surface-soft);
        }

        .infoIcon {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background-color: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 16px;
                color: var(--color-heading);
            }
        }

        .infoTitle {
            font-size: 0.8rem;
            font-weight: 600;
            margin-top: 4px;
            color: var(--color-heading);
        }

        .infoText {
            font-size: 0.82rem;
            color: var(--color-text);
        }

        .infoEmail {
            font-weight: 600;
            color: var(--color-link);
        }

        /* Mission */

        .missionSection {
            margin-top: 26px;
        }

        .missionCard {
            background-color: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border-radius: 12px;
            padding: 18px 18px 20px;
            border: 1px solid var(--color-border);
            text-align: center;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);

            @media (width >= 768px) {
                padding: 22px 28px 24px;
            }
        }

        .missionTitle {
            font-size: 1.05rem;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .missionText {
            font-size: 0.88rem;
            margin-bottom: 6px;
        }

        /* Join section */

        .joinSection {
            margin-top: 32px;
            text-align: center;
        }

        .joinTitle {
            font-size: 1.2rem;
            color: var(--color-heading);
            margin-bottom: 16px;
        }

        .joinGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 10px;

            @media (width >= 640px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        .joinItem {
            background-color: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 12px;
            padding: 14px 10px;
            border: 1px solid var(--color-border);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            box-shadow: var(--shadow-soft);
            transition: transform 0.16s ease, box-shadow 0.16s ease,
                border-color 0.16s ease, background-color 0.16s ease;
        }

        .joinItem:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
            border-color: var(--color-secondary);
            background-color: var(--color-surface-soft);
        }

        .joinLink {
            text-decoration: none;
        }

        .iconWrap {
            width: 32px;
            height: 32px;
            border-radius: 999px;
            background-color: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;

            svg {
                font-size: 18px;
                color: var(--color-heading);
            }
        }

        .joinLabel {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text-muted);
        }

        .joinValue {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .joinHint {
            font-size: 0.76rem;
            color: var(--color-text-muted);
        }

        .joinNote {
            margin-top: 10px;
            font-size: 0.8rem;
            color: var(--color-text-muted);
            max-width: 640px;
            margin-inline: auto;
        }

        .ctaRow {
            margin-top: 14px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        .primaryCta,
        .ghostCta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 0.82rem;
            text-decoration: none;
            transition: background-color 0.18s ease, color 0.18s ease,
                border-color 0.18s ease, box-shadow 0.18s ease,
                transform 0.1s ease;
        }

        .primaryCta {
            background-color: var(--color-primary);
            color: var(--color-primary-text);
            border: 1px solid var(--color-primary);

            &:hover {
                background-color: var(--color-secondary);
                border-color: var(--color-secondary);
                color: var(--color-secondary-text);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }
        }

        .ghostCta {
            background-color: transparent;
            color: var(--color-link);
            border: 1px solid var(--color-border);

            &:hover {
                background-color: var(--color-surface-soft);
                border-color: var(--color-link);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);
            }
        }
    `,
};
