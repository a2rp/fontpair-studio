import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        margin-top: auto;
        padding: 42px max(16px, 4vw) 24px;
        border-top: 1px solid #262a3a;
        background: #050509;
        color: #e1e5f5;

        .footerGrid {
            width: min(1120px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 28px;
            align-items: center;
        }

        .footerIntro,
        .footerSupport {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .footerIntro img {
            width: 64px;
            height: 64px;
            object-fit: contain;
            padding: 8px;
            border: 1px solid #262a3a;
            border-radius: 14px;
            background: #000000;
        }

        .footerIntro strong {
            color: #ffffff;
            font-size: 18px;
        }

        .footerIntro p,
        .footerSupport p {
            margin-top: 5px;
            color: #8f96a8;
            font-size: 12px;
            line-height: 1.6;
        }

        .footerSupport {
            justify-content: flex-end;
        }

        .footerSupport img {
            width: 74px;
            height: 74px;
            padding: 4px;
            border-radius: 10px;
            background: #ffffff;
        }

        .footerBottom {
            width: min(1120px, 100%);
            margin: 30px auto 0;
            padding-top: 18px;
            border-top: 1px solid #1c2030;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            flex-wrap: wrap;
            color: #8f96a8;
            font-size: 12px;
        }

        .footerBottom p {
            margin: 0;
        }

        .footerBottom p a {
            color: #e1e5f5;
            font-weight: 700;
        }

        .footerLinks {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 7px;
            flex-wrap: wrap;
        }

        .footerLinks a {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #262a3a;
            border-radius: 9px;
            color: #b3b7c8;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                color 0.18s ease;
        }

        .footerLinks a:hover,
        .footerLinks a:focus-visible {
            border-color: #f15a24;
            box-shadow: 0 0 16px rgba(241, 90, 36, 0.2);
            color: #ffffff;
            outline: none;
        }

        @media (max-width: 720px) {
            .footerGrid,
            .footerBottom {
                grid-template-columns: 1fr;
            }

            .footerSupport {
                justify-content: flex-start;
            }

            .footerLinks {
                justify-content: flex-start;
            }
        }
    `,
};
