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
            margin-bottom: 32px;
        }

        .title {
            font-size: 1.9rem;
            font-weight: 700;
            color: var(--color-heading);
        }

        .title span {
            color: var(--color-primary);
        }

        .tagline {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .spark {
            color: var(--color-primary);
            margin-left: 4px;
            vertical-align: middle;
        }

        /* SECTION TITLE */
        .secTitle {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: var(--color-heading);
            text-align: center;
        }

        /* BENEFITS */
        .benefitsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 22px;
            margin-bottom: 40px;
        }

        .benefitCard {
            background: var(--color-surface);
            padding: 20px 16px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            text-align: center;

            transition: transform 0.25s ease, box-shadow 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.26);
                border-color: var(--color-primary);
            }
        }

        .iconWrap {
            width: 40px;
            height: 40px;
            margin: 0 auto 12px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 20px;
        }

        .bTitle {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 4px;
            color: var(--color-heading);
        }

        .bDesc {
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        /* PLANS */
        .plansGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
            margin-bottom: 48px;
        }

        .planCard {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 22px 18px;
            border-radius: 16px;
            transition: transform 0.25s ease, border-color 0.25s ease,
                box-shadow 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26);
            }
        }

        .planCard.highlight {
            border-color: var(--color-primary);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26);
            transform: translateY(-4px);
        }

        .planName {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 4px;
            color: var(--color-heading);
        }

        .planDesc {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            margin-bottom: 14px;
        }

        .planList {
            list-style: none;
            padding: 0;
            margin: 0 0 16px;
        }

        .planList li {
            font-size: 0.85rem;
            margin-bottom: 6px;
            color: var(--color-surface-soft-text);
        }

        .joinBtn {
            width: 100%;
            padding: 10px 14px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            background: var(--color-primary);
            color: var(--color-primary-text);
            font-weight: 600;
            font-size: 0.92rem;
            transition: background 0.2s ease, transform 0.2s ease,
                box-shadow 0.2s ease;

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
                box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
            }

            &:focus-visible {
                outline: 2px solid var(--color-secondary);
                outline-offset: 2px;
            }
        }

        /* CTA */
        .ctaSec {
            text-align: center;
            margin-top: 40px;
        }

        .ctaBtn {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 10px 18px;
            border-radius: 12px;
            border: none;
            background: var(--color-primary);
            color: var(--color-primary-text);
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.2s ease, transform 0.2s ease;

            svg {
                font-size: 20px;
            }

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }
        }

        /* PLAN MODAL */

        .planModalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            z-index: 999;
        }

        .planModal {
            width: 100%;
            max-width: 520px;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
            padding: 20px 18px 18px;
            position: relative;

            transform: translateY(8px) scale(0.98);
            opacity: 0;
            animation: planModalIn 0.2s ease-out forwards;
        }

        @keyframes planModalIn {
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .planModalClose {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: transparent;
            color: var(--color-text-muted);
            font-size: 18px;
            cursor: pointer;
            padding: 4px;

            transition: color 0.15s ease, transform 0.15s ease;

            &:hover {
                color: var(--color-heading);
                transform: scale(1.1);
            }
        }

        .planModalTitle {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .planModalText {
            font-size: 0.9rem;
            color: var(--color-surface-text);
            margin-bottom: 10px;
        }

        .planSteps {
            list-style: none;
            padding: 0;
            margin: 0 0 14px;
        }

        .planSteps li {
            font-size: 0.86rem;
            color: var(--color-text-muted);
            margin-bottom: 6px;
            padding-left: 16px;
            position: relative;
        }

        .planSteps li::before {
            content: "•";
            position: absolute;
            left: 4px;
            top: 0;
            color: var(--color-primary);
        }

        .planModalEmailBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;

            transition: background 0.18s ease, transform 0.12s ease,
                box-shadow 0.18s ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: var(--color-primary);
                transform: translateY(-1px);
                box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
            }
        }

        .planModalNote {
            margin-top: 8px;
            font-size: 0.78rem;
            color: var(--color-text-muted);
        }
    `,
};
