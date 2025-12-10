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

        /* FILTER TABS */
        .tabs {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 30px;
        }

        .tab {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-surface-text);
            padding: 8px 16px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 0.9rem;

            transition: background 0.2s ease, transform 0.2s ease;

            &:hover {
                background: var(--color-surface-soft);
                transform: translateY(-2px);
            }
        }

        .tab.active {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);
            font-weight: 600;
        }

        /* GRID */
        .gridSection {
            position: relative;
        }

        .grid {
            display: grid;
            gap: 22px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        /* EVENT CARD */
        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 26px rgba(0, 0, 0, 0.28);
            }
        }

        .imgWrap {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
        }

        .imgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .tag {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 4px 10px;
            background: var(--color-secondary);
            color: var(--color-secondary-text);
            font-size: 0.75rem;
            border-radius: 999px;
        }

        /* INFO */
        .info {
            padding: 18px 16px;
        }

        .evTitle {
            font-size: 1.05rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .meta {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .metaItem {
            display: flex;
            align-items: center;
            gap: 6px;

            svg {
                color: var(--color-primary);
            }
        }

        .detailsBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 10px;
            background: var(--color-primary);
            color: var(--color-primary-text);
            border: none;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;

            transition: background 0.2s ease, transform 0.2s ease;

            &:hover {
                background: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-2px);
            }

            svg {
                font-size: 18px;
            }
        }

        /* EVENT MODAL */

        .eventModalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            z-index: 999;
        }

        .eventModal {
            width: 100%;
            max-width: 640px;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 22px 40px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            position: relative;

            transform: translateY(8px) scale(0.98);
            opacity: 0;
            animation: eventModalIn 0.2s ease-out forwards;
        }

        @keyframes eventModalIn {
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .eventModalClose {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            width: 26px;
            height: 26px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: background 0.15s ease, transform 0.15s ease;

            &:hover {
                background: rgba(0, 0, 0, 0.6);
                transform: scale(1.05);
            }
        }

        .eventModalImgWrap {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
        }

        .eventModalImgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .eventModalTag {
            position: absolute;
            bottom: 12px;
            left: 12px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-secondary);
            color: var(--color-secondary-text);
            font-size: 0.8rem;
        }

        .eventModalBody {
            padding: 18px 18px 20px;
        }

        .eventModalTitle {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--color-heading);
        }

        .eventModalMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 0.86rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;

            span {
                display: inline-flex;
                align-items: center;
                gap: 6px;

                svg {
                    color: var(--color-primary);
                }
            }
        }

        .eventModalDesc {
            font-size: 0.9rem;
            color: var(--color-surface-text);
            margin-bottom: 10px;
        }

        .eventModalNote {
            font-size: 0.8rem;
            color: var(--color-text-muted);
            margin-bottom: 14px;
        }

        .eventModalCta {
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
    `,
};
