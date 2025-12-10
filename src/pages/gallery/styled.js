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
        }

        .heroTagline {
            font-size: 0.95rem;
            color: var(--color-text-muted);
        }

        .sparkIcon {
            margin-left: 4px;
            color: var(--color-primary);
        }

        /* FILTERS */
        .filters {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 20px 0 28px;
        }

        .filterBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-surface-text);
            font-size: 0.86rem;
            cursor: pointer;

            transition: background 0.2s ease, transform 0.2s ease,
                border-color 0.2s ease, color 0.2s ease;

            .filterIcon {
                font-size: 16px;
                color: var(--color-primary);
            }

            &:hover {
                background: var(--color-surface-soft);
                transform: translateY(-2px);
            }
        }

        .filterBtn--active {
            background: var(--color-primary);
            border-color: var(--color-primary);
            color: var(--color-primary-text);

            .filterIcon {
                color: var(--color-primary-text);
            }
        }

        /* GRID */
        .gridSection {
            margin-top: 6px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 16px;
        }

        .tile {
            border: none;
            padding: 0;
            background: transparent;
            cursor: pointer;
            text-align: left;
        }

        .imgWrap {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);

            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;
        }

        .imgWrap img {
            display: block;
            width: 100%;
            height: 180px;
            object-fit: cover;
            transform: scale(1.03);
            transition: transform 0.35s ease;
        }

        .tile:hover .imgWrap {
            transform: translateY(-6px);
            border-color: var(--color-primary);
            box-shadow: 0 16px 30px rgba(0, 0, 0, 0.4);
        }

        .tile:hover img {
            transform: scale(1.07);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.1)
            );
            opacity: 0;
            display: flex;
            align-items: flex-end;
            padding: 10px 12px;

            transition: opacity 0.25s ease;
        }

        .tile:hover .overlay {
            opacity: 1;
        }

        .overlayInner {
            color: #fff;
        }

        .overlayInner h3 {
            font-size: 0.96rem;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .overlayInner p {
            font-size: 0.8rem;
            opacity: 0.9;
        }

        /* LIGHTBOX */
        .lightbox {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            padding: 16px;
        }

        .lightboxInner {
            position: relative;
            max-width: 960px;
            width: 100%;
            background: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
            overflow: hidden;
        }

        .lightboxImageWrap {
            width: 100%;
            max-height: min(560px, 70vh);
            overflow: hidden;
            background: #000;
        }

        .lightboxImageWrap img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .lightboxMeta {
            padding: 14px 18px 16px;
            border-top: 1px solid var(--color-border);
        }

        .lightboxMeta h3 {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .lightboxMeta p {
            font-size: 0.88rem;
            color: var(--color-text-muted);
        }

        .lightboxClose {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            border-radius: 999px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            cursor: pointer;

            transition: background 0.2s ease, transform 0.2s ease;

            svg {
                font-size: 18px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.8);
                transform: translateY(-1px);
            }
        }

        .lightboxNav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border: none;
            border-radius: 999px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            cursor: pointer;

            transition: background 0.2s ease, transform 0.2s ease;

            svg {
                font-size: 20px;
            }

            &:hover {
                background: rgba(0, 0, 0, 0.85);
                transform: translateY(-50%) scale(1.05);
            }
        }

        .lightboxNav--prev {
            left: 10px;
        }

        .lightboxNav--next {
            right: 10px;
        }

        @media (width < 600px) {
            .lightboxInner {
                border-radius: 14px;
            }

            .lightboxNav {
                width: 32px;
                height: 32px;
            }
        }
    `,
};
