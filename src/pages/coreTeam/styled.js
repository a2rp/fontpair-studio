import styled from "styled-components";

export const Styled = {
    Page: styled.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* Header Section */
        .headerSection {
            text-align: center;
            margin-bottom: 38px;
        }

        .headerIcon {
            font-size: 48px;
            color: var(--color-primary);
            margin-bottom: 10px;
            opacity: 0.9;
        }

        .title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--color-heading);
            margin-bottom: 6px;
        }

        .subtitle {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .subtitle span {
            font-weight: 600;
            color: var(--color-primary);
        }

        .sparkIcon {
            color: var(--color-primary);
            margin-left: 4px;
            vertical-align: middle;
        }

        /* Team Grid */
        .teamGrid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 22px;
        }

        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px 16px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            cursor: pointer;

            /* Micro Interaction */
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;

            &:hover {
                transform: translateY(-6px);
                border-color: var(--color-primary);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
            }
        }

        /* Image */
        .imgWrap {
            width: 110px;
            height: 110px;
            margin: 0 auto 14px;
            border-radius: 999px;
            overflow: hidden;
            border: 3px solid var(--color-primary-soft);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
            background: var(--color-bg-alt);
            transition: border-color 0.25s ease;

            .card:hover & {
                border-color: var(--color-primary);
            }
        }

        .imgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Info */
        .name {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .role {
            font-size: 0.9rem;
            color: var(--color-primary);
            margin-bottom: 12px;
        }

        /* Social Icons */
        .social {
            display: flex;
            justify-content: center;
            gap: 12px;
        }

        .sIcon {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;

            background: var(--color-surface-soft);
            color: var(--color-primary);
            font-size: 1.2rem;
            border: 1px solid var(--color-border);

            transition: background 0.2s ease, transform 0.2s ease,
                color 0.2s ease;

            &:hover {
                background: var(--color-primary);
                color: var(--color-bg);
                transform: scale(1.1);
            }
        }

        /* ===== MODAL ===== */

        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.58);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            padding: 16px;
        }

        .modal {
            max-width: 520px;
            width: 100%;
            background: var(--color-surface);
            color: var(--color-surface-text);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            padding: 18px 18px 20px;
            position: relative;
        }

        .modalCloseBtn {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 28px;
            height: 28px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg-alt);
            color: var(--color-surface-soft-text);
            cursor: pointer;
            font-size: 16px;
            line-height: 1;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: background 0.2s ease, transform 0.1s ease,
                color 0.2s ease;

            &:hover {
                background: var(--color-primary);
                color: var(--color-primary-text);
                transform: translateY(-1px);
            }
        }

        .modalHeader {
            display: flex;
            gap: 14px;
            align-items: center;
            margin-bottom: 12px;
        }

        .modalImgWrap {
            width: 80px;
            height: 80px;
            border-radius: 999px;
            overflow: hidden;
            border: 3px solid var(--color-primary-soft);
            background: var(--color-bg-alt);
            flex-shrink: 0;
        }

        .modalImgWrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .modalTitleBlock {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .modalName {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-heading);
        }

        .modalRole {
            font-size: 0.9rem;
            color: var(--color-primary);
        }

        .modalMeta {
            font-size: 0.82rem;
            color: var(--color-text-muted);
        }

        .modalBody {
            margin-top: 6px;
        }

        .modalText {
            font-size: 0.88rem;
            color: var(--color-surface-soft-text);
            margin-bottom: 8px;
        }

        .modalText.funFact span {
            font-weight: 600;
            color: var(--color-primary);
        }

        .modalActions {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .modalBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 0.86rem;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid transparent;
            transition: background 0.2s ease, color 0.2s ease,
                transform 0.1s ease, border-color 0.2s ease;

            svg {
                font-size: 16px;
            }
        }

        .modalBtn.primary {
            background: var(--color-primary);
            color: var(--color-primary-text);
            border-color: var(--color-primary);

            &:hover {
                background: var(--color-secondary);
                border-color: var(--color-secondary);
                color: var(--color-secondary-text);
                transform: translateY(-1px);
            }
        }

        .modalBtn.ghost {
            background: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border-color: var(--color-border);

            &:hover {
                background: var(--color-bg-alt);
                border-color: var(--color-primary);
                color: var(--color-heading);
                transform: translateY(-1px);
            }
        }
    `,
};
