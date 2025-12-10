import styled from "styled-components";

export const Styled = {
    Page: styled.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* HERO */
        .hero {
            text-align: center;
            margin-bottom: 28px;
        }

        .heroIcon {
            font-size: 48px;
            color: var(--color-primary);
            margin-bottom: 10px;
        }

        .heroTitle {
            font-size: 1.9rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .heroTagline {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .heroTagline span {
            color: var(--color-primary);
            font-weight: 600;
        }

        .sparkIcon {
            margin-left: 4px;
            color: var(--color-primary);
        }

        /* IMPACT STRIP */
        .impactStrip {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 12px;
            margin-bottom: 32px;
        }

        .impactItem {
            background: var(--color-surface);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 10px 14px;
            text-align: center;
        }

        .impactValue {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-heading);
        }

        .impactLabel {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        /* GENERIC SECTION */
        .section {
            margin-top: 28px;
        }

        .secTitle {
            font-size: 1.35rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 18px;
            text-align: center;
        }

        /* MAJOR SPONSORS */
        .majorGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 22px;
        }

        .sponsorCard {
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            padding: 18px 18px 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 16px 30px rgba(0, 0, 0, 0.32);
            }
        }

        .cardHeader {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logoWrap {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .logoWrap img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .cardHeading {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .sponsorName {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .tierBadge {
            align-self: flex-start;
            padding: 3px 9px;
            border-radius: 999px;
            background: var(--color-secondary-soft);
            color: var(--color-secondary-text);
            font-size: 0.75rem;
            font-weight: 600;
        }

        .focus {
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .supportList {
            list-style: none;
            padding-left: 0;
            margin: 0 0 8px;
        }

        .supportList li {
            font-size: 0.84rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 4px;
            position: relative;
            padding-left: 14px;
        }

        .supportList li::before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-primary);
        }

        .visitBtn {
            margin-top: 4px;
            align-self: flex-start;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            background: var(--color-primary);
            color: var(--color-primary-text);
            font-size: 0.86rem;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }
        }

        /* COMMUNITY PARTNERS */
        .communityGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 18px;
        }

        .communityCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 16px 16px 18px;
            transition: transform 0.22s ease, border-color 0.22s ease,
                box-shadow 0.22s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
                box-shadow: 0 12px 26px rgba(0, 0, 0, 0.26);
            }
        }

        .communityHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .logoMini {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: var(--color-bg-alt);
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .logoMini img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .communityName {
            font-size: 0.98rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .communityRole {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        .communityNote {
            font-size: 0.84rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 8px;
        }

        .communityLink {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.84rem;
            text-decoration: none;
            color: var(--color-primary);
            padding: 4px 0;

            svg {
                font-size: 16px;
            }

            &:hover {
                color: var(--color-secondary);
            }
        }

        /* TIERS */
        .tiersGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
        }

        .tierCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 18px 16px 20px;
            transition: transform 0.22s ease, box-shadow 0.22s ease,
                border-color 0.22s ease;

            &:hover {
                transform: translateY(-5px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        .tierIconWrap {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background: var(--color-primary-soft);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-heading);
            margin-bottom: 10px;

            svg {
                font-size: 20px;
            }
        }

        .tierLabel {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .tierList {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }

        .tierList li {
            font-size: 0.84rem;
            color: var(--color-text-muted);
            margin-bottom: 4px;
        }

        /* CTA SECTION */
        .ctaSection {
            margin-top: 40px;
        }

        .ctaContent {
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            padding: 20px 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;

            @media (width >= 720px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
        }

        .ctaText h2 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .ctaText p {
            font-size: 0.9rem;
            color: var(--color-text-muted);
        }

        .ctaActions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .ctaBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 9px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            cursor: pointer;
            font-size: 0.88rem;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.2s ease, color 0.2s ease,
                transform 0.2s ease, border-color 0.2s ease;

            svg {
                font-size: 18px;
            }
        }

        .ctaBtn.primary {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }
        }

        .ctaBtn.ghost {
            background: transparent;
            color: var(--color-primary);
            white-space: nowrap;

            &:hover {
                background: var(--color-surface-soft);
                border-color: var(--color-primary);
                transform: translateY(-2px);
            }
        }
    `,
};
