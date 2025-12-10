import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        margin-top: auto;
        padding: 32px 16px 40px;
        border-top: 1px solid #262a3a;
        background: #050509;
        color: #e1e5f5;

        .heroSection {
            border: 1px solid #333;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;

            @media (width < 1200px) {
                flex-wrap: wrap;
                gap: 50px;
            }

            .aboutMeWrapper,
            .youtubeWrapper,
            .qrCodeWrapper {
                width: 100%;
            }

            /* === About me === */
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

                .websiteLinks {
                    margin: 15px 0;
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

            /* === YouTube card === */
            .youtubeWrapper {
                display: flex;
                flex-direction: column;
                align-items: center;

                .youtubeText {
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                    color: var(--color-surface-soft-text);
                }

                .ytChannelCard {
                    width: 100%;
                    max-width: 420px;
                    padding: 12px 16px;
                    border-radius: 999px;
                    background: #f5f7ff;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.55);
                    min-width: 300px;
                }

                .row1 {
                    /* border: 1px solid #f00; */
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                    padding: 0 15px;
                }

                .ytInfo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    align-items: center;
                    text-decoration: none;
                }

                .ytInfo:hover {
                    text-decoration: none;
                    transform: translateY(-1px);
                    transition: transform 0.18s ease;
                }

                .youtubeIcon {
                    color: #ff0000;
                }

                .ytText {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .ytTitle {
                    font-size: 1.7rem;
                    font-weight: 600;
                    color: #000;
                }

                .ytSubtitle {
                    font-size: 0.8rem;
                    color: #4b5563;
                }

                .ytSubscribeBtn {
                    padding: 8px 16px;
                    border-radius: 999px;
                    background: #ff0000;
                    color: #ffffff;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    white-space: nowrap;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.45);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    /* align-self: flex-start; */
                    transition: transform 0.15s ease, box-shadow 0.15s ease,
                        background 0.15s ease;
                }

                .ytSubscribeBtn:hover {
                    background: #ff3333;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
                }

                .afterSubscribe {
                    width: 100%;
                    color: #000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-size: 0.8rem;
                }

                @media (width < 480px) {
                    .ytChannelCard {
                        border-radius: 18px;
                    }

                    .ytSubscribeBtn {
                        padding: 6px 12px;
                        font-size: 0.75rem;
                    }
                }
            }

            /* === QR / UPI === */
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

        .footerBottom {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin-top: 30px;
            font-size: 0.85rem;
            flex-wrap: wrap;
        }

        .pageMeta {
            display: flex;
            gap: 6px;
            font-size: 0.8rem;
            color: #7c8197;
        }

        .pageMetaLabel {
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }
    `,
};
