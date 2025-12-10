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
            margin-bottom: 36px;
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

        .downloadsSec {
            margin-top: 50px;
        }

        /* SECTION TITLE */
        .secTitle {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 18px;
            color: var(--color-heading);
            text-align: center;
        }

        /* GRID */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 22px;
        }

        /* CARD */
        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 20px;
            border-radius: 16px;
            text-align: center;

            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
                border-color: var(--color-primary);
            }
        }

        .iconWrap {
            width: 42px;
            height: 42px;
            margin: 0 auto 12px;
            background: var(--color-primary-soft);
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-heading);
            font-size: 20px;
        }

        .cardTitle {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .cardDesc {
            color: var(--color-text-muted);
            font-size: 0.86rem;
            margin-bottom: 10px;
        }

        .learnMore {
            border: none;
            background: transparent;
            color: var(--color-primary);
            font-size: 0.86rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;

            transition: color 0.2s ease, transform 0.12s ease;

            &:hover {
                color: var(--color-secondary);
                transform: translateY(-1px);
            }
        }

        /* DOWNLOADS */
        .dlWrap {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 540px;
            margin: 0 auto 40px;
        }

        .dlItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-text);

            transition: transform 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;

            svg {
                font-size: 20px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-3px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        .dlText {
            flex-grow: 1;
            font-size: 0.92rem;
        }

        .dlSize {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        /* USEFUL LINKS */
        .linksList {
            list-style: none;
            padding: 0;
            max-width: 540px;
            margin: 0 auto;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .linksList li {
            margin-bottom: 12px;
        }

        .extLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-text);
            font-size: 0.9rem;

            transition: transform 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;

            svg {
                font-size: 18px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-3px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        /* LOCAL RESOURCES */
        .localSec {
            margin-top: 40px;
        }

        .localCard {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 20px;
            border-radius: 16px;

            transition: transform 0.25s ease, border-color 0.25s ease,
                box-shadow 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        .iconWrap.alt {
            background: var(--color-secondary-soft);
            color: var(--color-heading);
        }

        .localTitle {
            font-size: 1rem;
            font-weight: 600;
            margin: 12px 0 10px;
            color: var(--color-heading);
        }

        .localList {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .localList li {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 6px;
            font-size: 0.85rem;
            color: var(--color-text-muted);

            svg {
                color: var(--color-primary);
            }
        }

        /* ===== MODAL ===== */

        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            padding: 16px;
        }

        .modal {
            width: 100%;
            max-width: 560px;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
            padding: 18px 18px 18px;
            position: relative;

            transform: translateY(8px) scale(0.98);
            opacity: 0;
            animation: modalIn 0.2s ease-out forwards;
        }

        @keyframes modalIn {
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .modalClose {
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

        .modalHeader {
            display: flex;
            gap: 12px;
            margin-bottom: 12px;
            align-items: center;
        }

        .modalIcon {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 22px;
            flex-shrink: 0;
        }

        .modalTitle {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .modalSubtitle {
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .modalBody {
            margin-bottom: 12px;
        }

        .modalIntro {
            font-size: 0.9rem;
            color: var(--color-surface-text);
            margin-bottom: 10px;
        }

        .moduleList {
            list-style: none;
            padding-left: 0;
            margin: 0;
        }

        .moduleList li {
            position: relative;
            padding-left: 16px;
            margin-bottom: 6px;
            font-size: 0.86rem;
            color: var(--color-text-muted);
        }

        .moduleList li::before {
            content: "•";
            position: absolute;
            left: 4px;
            top: 0;
            color: var(--color-primary);
        }

        .modalFooter {
            margin-top: 6px;
            border-top: 1px solid var(--color-border);
            padding-top: 10px;
        }

        .pdfBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-primary);
            background: var(--color-primary-soft);
            color: var(--color-heading);
            text-decoration: none;
            font-size: 0.86rem;
            font-weight: 600;

            transition: background 0.18s ease, transform 0.12s ease,
                box-shadow 0.18s ease;
        }

        .pdfBtn svg {
            font-size: 18px;
        }

        .pdfBtn:hover {
            background: var(--color-primary);
            transform: translateY(-1px);
            box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
        }

        .pdfSize {
            font-weight: 400;
            opacity: 0.9;
        }

        .modalNote {
            margin-top: 6px;
            font-size: 0.78rem;
            color: var(--color-text-muted);
        }
    `,
};
