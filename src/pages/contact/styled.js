import styled from "styled-components";

export const Styled = {
    Page: styled.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* ===== HERO BANNER ===== */

        .contactHero {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
        }

        .heroCard {
            width: 100%;
            max-width: 720px;
            padding: 22px 20px 22px;
            border-radius: 20px;
            background: var(--color-surface-soft);
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px rgba(0, 0, 0, 0.34);
            text-align: center;

            @media (width >= 768px) {
                padding: 26px 30px 26px;
            }
        }

        .eyebrow {
            font-size: 0.8rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--color-primary);
            margin-bottom: 4px;
        }

        .heroTitle {
            font-size: 1.7rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 8px;
        }

        .heroText {
            font-size: 0.92rem;
            color: var(--color-text-muted);
            max-width: 540px;
            margin: 0 auto 18px;
        }

        .sparkIcon {
            margin-left: 4px;
            vertical-align: middle;
            color: var(--color-primary);
        }

        .linkList {
            list-style: none;
            padding: 0;
            margin: 0 0 14px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
        }

        .linkItem {
            margin: 0;
        }

        .linkPill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            text-decoration: none;
            background: var(--color-bg);
            color: var(--color-surface-soft-text);
            font-size: 0.82rem;

            transition: background 0.2s ease, transform 0.12s ease,
                box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .pillIcon {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary-soft);
            color: var(--color-heading);
            font-size: 14px;
        }

        .pillText {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1px;
        }

        .pillLabel {
            font-weight: 600;
            color: var(--color-heading);
        }

        .pillSub {
            font-size: 0.76rem;
            color: var(--color-text-muted);
        }

        .linkPill:hover {
            background: var(--color-primary);
            border-color: var(--color-primary);
            color: var(--color-primary-text);
            transform: translateY(-1px);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);

            .pillIcon {
                background: var(--color-bg);
                color: var(--color-primary);
            }

            .pillSub {
                color: var(--color-primary-text);
            }
        }

        .heroMeta {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 4px;
        }

        .metaItem {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.78rem;
            color: var(--color-text-muted);
        }

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            flex-shrink: 0;
        }

        /* ===== INFO STRIP ===== */

        .infoStrip {
            display: grid;
            gap: 10px;
            margin-bottom: 28px;

            @media (width >= 720px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        .infoItem {
            background: var(--color-surface);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);

            transition: transform 0.18s ease, box-shadow 0.18s ease,
                border-color 0.18s ease;
        }

        .infoItem:hover {
            transform: translateY(-3px);
            border-color: var(--color-primary);
            box-shadow: 0 14px 26px rgba(0, 0, 0, 0.35);
        }

        .infoIcon {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            background: var(--color-primary-soft);
            color: var(--color-heading);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }

        .infoLabel {
            font-size: 0.84rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .infoValue {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }
    `,
};
