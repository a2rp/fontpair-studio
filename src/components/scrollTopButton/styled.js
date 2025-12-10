// src/components/scrollTopButton/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 20;

        .scrollTopButton {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            border: 1px solid #262a3a;
            background: #f15a24;
            color: #ffffff;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
            transition: transform 0.18s ease, box-shadow 0.18s ease,
                background 0.18s ease;
        }

        .scrollTopButton:hover {
            background: #ff6a1a;
            transform: translateY(-1px);
            box-shadow: 0 14px 30px rgba(0, 0, 0, 0.75);
        }

        @media (max-width: 600px) {
            right: 12px;
            bottom: 12px;

            .scrollTopButton {
                width: 34px;
                height: 34px;
                font-size: 16px;
            }
        }
    `,
};
