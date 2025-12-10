import styled, { keyframes } from "styled-components";

const floatSoft = keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-6px); }
    100% { transform: translateY(0); }
`;

export const Styled = {
    Page: styled.main`
        padding: 32px 16px 80px;
        max-width: 1180px;
        margin: 0 auto;

        @media (width >= 768px) {
            padding: 40px 24px 100px;
        }

        /* PAGE META (LAST UPDATED) */
        .pageMeta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            font-size: 0.78rem;
            margin-bottom: 16px;
        }

        .pageMetaLabel {
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-weight: 600;
            font-size: 0.72rem;
            color: var(--color-text-muted);
        }

        .pageMetaValue {
            color: var(--color-surface-soft-text);
        }

        /* ===== HERO STRIP (YOUR ORIGINAL LAYOUT) ===== */
        .heroSection {
            border: 1px solid #333;
            border-radius: 5px;
            display: flex;
            gap: 15px;
            padding: 15px;

            @media (width < 800px) {
                flex-wrap: wrap;
                gap: 50px;
            }

            .aboutMeWrapper,
            .youtubeWrapper,
            .qrCodeWrapper {
                width: 100%;
            }

            .aboutMeWrapper {
                display: flex;
                flex-direction: column;

                .aboutMeImageWrapper {
                    height: 150px;
                    width: 200px;
                    text-align: center;
                    background-color: #000;
                    border-radius: 15px;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }

                .aboutMeTextWrapper {
                    margin-top: 12px;
                    font-size: 0.95rem;
                    color: var(--color-surface-soft-text);
                    line-height: 1.5;
                }

                .socialMediaLinks {
                    margin-top: 15px;
                    display: flex;
                    gap: 15px;
                    align-items: center;

                    a {
                        border: 1px solid #333;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        background: var(--color-surface-soft);
                        color: var(--color-heading);
                        transition: transform 0.2s ease;
                        &:hover {
                            transform: scale(1.1);
                        }

                        .socialIcon {
                            font-size: 20px;
                        }
                    }
                }
            }

            .youtubeWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;

                .youtubeTextWrapper {
                    text-align: center;
                    font-size: 0.9rem;
                    color: var(--color-surface-soft-text);

                    .youtubeLogo {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 15px;
                        transition: transform 0.2s ease;

                        &:hover {
                            transform: scale(1.1);
                        }

                        .youtubeIcon {
                            color: #f00;
                        }
                        span {
                            color: #000;
                            text-shadow: 0 0 3px #fff;
                            font-size: 32px;
                        }
                    }

                    a {
                        color: var(--color-primary);
                        text-decoration: none;
                        font-weight: 600;
                    }
                }

                .block {
                    background-color: #f00;
                    width: 100%;
                    max-width: 250px;
                    border-radius: 100px;
                    text-align: center;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    position: relative;
                    text-decoration: none;
                    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); */
                    transition: transform 0.2s ease;

                    &:hover {
                        transform: scale(1.1);
                    }

                    .blockText {
                        width: 100%;
                        font-weight: 900;
                        color: var(--color-bg);

                        &.textLeft {
                            text-align: left;
                            padding-left: 30px;
                        }
                        &.textRight {
                            text-align: right;
                            padding-right: 30px;
                        }
                    }

                    .iconLeft,
                    .iconRight {
                        border: 5px solid var(--color-bg);
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        position: absolute;
                        margin: auto;
                        top: 0;
                        bottom: 0;
                        background-color: #f00;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .youtubeChildIcon {
                            color: var(--color-bg);
                        }
                    }
                    .iconLeft {
                        left: 0;
                    }
                    .iconRight {
                        right: 0;
                    }
                }
            }

            .qrCodeWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 8px;
                text-align: center;

                transition: transform 0.2s ease;
                &:hover {
                    transform: scale(1.05);
                }

                .qrText {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                }

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 260px;
                    border-radius: 12px;
                    background: #fff;
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
                }
            }
        }

        /* ===== ABOUT DETAILS SECTION (NEW) ===== */
        .detailsSection {
            margin-top: 40px;
        }

        .sectionTitle {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 10px;
        }

        .sectionLead {
            font-size: 0.95rem;
            color: var(--color-text-muted);
            margin-bottom: 22px;
            max-width: 720px;
        }

        .detailsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
        }

        .infoCard {
            background: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            padding: 18px 16px;
        }

        .cardTitle {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-heading);
            margin-bottom: 8px;
        }

        .cardText {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            line-height: 1.5;
            margin-top: 6px;
        }

        .bulletList {
            list-style: disc;
            padding-left: 18px;
            margin: 4px 0 0;
            font-size: 0.88rem;
            color: var(--color-text-muted);

            li + li {
                margin-top: 4px;
            }
        }

        .tagsRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 8px 0 10px;
        }

        .pillTag {
            font-size: 0.78rem;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--color-surface-soft);
            color: var(--color-surface-soft-text);
            border: 1px solid var(--color-border);
        }

        /* ===== LINKS SECTION ===== */
        .linksSection {
            margin-top: 40px;
        }

        .linksGrid {
            margin-top: 14px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .linkCard {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            text-decoration: none;
            color: var(--color-surface-soft-text);
            font-size: 0.88rem;
            transition: transform 0.18s ease, border-color 0.18s ease,
                background 0.18s ease;

            .linkIcon {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                color: var(--color-primary);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-primary);
                background: var(--color-surface-soft);
            }
        }

        .linkCard--yt .linkIcon {
            color: #ff0000;
        }

        .supportNote {
            margin-top: 14px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }
    `,
};
