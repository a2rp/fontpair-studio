import styled from "styled-components";

export const Styled = {
    Header: styled.header`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 50;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(5, 5, 9, 0.94);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(14px);

        .headerInner {
            width: min(1120px, calc(100% - 32px));
            min-height: 68px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: #ffffff;
            text-decoration: none;
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.16);
        }

        .brand img {
            width: 38px;
            height: 38px;
            object-fit: contain;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 10px;
            background: #000000;
        }

        .brand span {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.25;
        }

        .brand small {
            color: #8f96a8;
            font-size: 9px;
            letter-spacing: 0.18em;
        }

        .navigation {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .navigation a,
        .menuButton {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 9px 12px;
            border: 1px solid transparent;
            border-radius: 8px;
            background: transparent;
            color: #c8ccda;
            font: inherit;
            font-size: 12px;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                color 0.18s ease;
        }

        .navigation a:hover,
        .navigation a:focus-visible,
        .menuButton:hover,
        .menuButton:focus-visible {
            border-color: rgba(241, 90, 36, 0.7);
            box-shadow: 0 0 18px rgba(241, 90, 36, 0.16);
            color: #ffffff;
            outline: none;
        }

        .menuButton {
            display: none;
        }

        @media (max-width: 700px) {
            .headerInner {
                width: min(100% - 24px, 1120px);
                min-height: 62px;
            }

            .menuButton {
                display: inline-flex;
            }

            .navigation {
                position: absolute;
                top: calc(100% + 8px);
                right: 12px;
                left: 12px;
                display: none;
                flex-direction: column;
                align-items: stretch;
                gap: 4px;
                padding: 8px;
                border: 1px solid rgba(255, 255, 255, 0.14);
                border-radius: 12px;
                background: #10121b;
                box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
            }

            .navigation.isOpen {
                display: flex;
            }

            .navigation a {
                justify-content: flex-start;
            }
        }
    `,
};
