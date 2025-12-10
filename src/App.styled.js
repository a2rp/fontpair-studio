// src/App.styled.js
import styled from "styled-components";

export const Styled = {
    App: styled.div`
        min-height: 100vh;
        background: #050509;
        color: #e1e5f5;
        padding-bottom: 100px;

        display: flex;
        flex-direction: column;

        /* ===== Theme variants on root ===== */

        &.theme-dark {
            background: #050509;
            color: #e1e5f5;
        }

        &.theme-light {
            background: #f5f5fb;
            color: #1b1d2a;
        }

        /* Toolbar + fields in light mode */
        &.theme-light .fieldInput,
        &.theme-light .fieldSelect {
            background: #ffffff;
            border-color: #d4d7e5;
            color: #1b1d2a;
        }

        &.theme-light .fieldInput::placeholder {
            color: #8b8fa3;
        }

        &.theme-light .fieldLabel {
            color: #6b7085;
        }

        &.theme-light .sectionHint,
        &.theme-light .shortlistHint {
            color: #7a7f93;
        }

        &.theme-light .shortlistEmpty,
        &.theme-light .shortlistItem {
            background: #ffffff;
            border-color: #d4d7e5;
        }

        &.theme-light .shortlistMeta {
            color: #7a7f93;
        }

        &.theme-light .confirmDialog,
        &.theme-light .toast,
        &.theme-light .shortlistJumpButton {
            background: #ffffff;
            color: #1b1d2a;
            border-color: #d4d7e5;
        }

        /* ===== Toolbar ===== */

        .toolbar {
            max-width: 1120px;
            margin: 0 auto;
            width: 100%;
            padding: 24px 16px 32px;
            display: flex;
            flex-wrap: wrap;
            gap: 16px 24px;
            align-items: flex-end;
        }

        @media (width >= 768px) {
            .toolbar {
                padding: 32px 24px 40px;
                justify-content: space-between;
            }
        }

        .toolbarLeft {
            display: flex;
            flex-wrap: wrap;
            gap: 16px 20px;
            flex: 1 1 260px;
        }

        .toolbarRight {
            display: flex;
            gap: 10px;
            flex-shrink: 0;
        }

        .fieldGroup {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 180px;
            flex: 1 1 180px;
        }

        .fieldLabel {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: #b3b7c8;
        }

        .fieldInput,
        .fieldSelect {
            border-radius: 4px;
            border: 1px solid #262a3a;
            background: #10121b;
            color: #e1e5f5;
            padding: 6px 8px;
            font-size: 13px;
        }

        .fieldInput::placeholder {
            color: #7c8197;
        }

        .fieldInput:focus,
        .fieldSelect:focus {
            outline: none;
            border-color: #f15a24;
            box-shadow: 0 0 0 2px rgba(241, 90, 36, 0.35);
        }

        .ghostButton,
        .themeToggle,
        .linkButton {
            font-size: 12px;
            padding: 6px 14px;
            border-radius: 999px;
            border: 1px solid #262a3a;
            background: #10121b;
            color: #e1e5f5;
            cursor: pointer;
            transition: background 0.18s ease, color 0.18s ease,
                border-color 0.18s ease, transform 0.15s ease;
        }

        .ghostButton:hover,
        .themeToggle:hover,
        .linkButton:hover {
            background: #f15a24;
            border-color: #f15a24;
            color: #ffffff;
            transform: translateY(-1px);
        }

        .themeToggle {
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        /* ===== Body layout ===== */

        .bodyLayout {
            display: flex;
            flex-direction: column;
            gap: 56px;
            width: 100%;
        }

        .pairsSection {
            width: 100%;
        }

        .sectionHeader {
            max-width: 960px;
            margin: 0 auto 24px;
            padding: 0 16px;
        }

        .sectionTitle {
            font-size: 20px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .sectionHint {
            margin-top: 6px;
            font-size: 12px;
            color: #b3b7c8;
        }

        /* ===== Full-screen font pair slides ===== */

        .pairsGrid {
            display: flex;
            flex-direction: column;
        }

        .pairCard {
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 64px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--pair-bg-color, #fbe18f);
            color: var(--pair-text-color, #111111);
        }

        @media (width >= 768px) {
            .pairCard {
                padding: 80px 48px;
            }
        }

        /* Solid slides (flat colour background) */
        .pairCard--solid .pairFontsLabel {
            color: rgba(0, 0, 0, 0.55);
        }

        .pairCard--solid .previewHeading {
            color: #111111;
        }

        .pairCard--solid .previewBody {
            color: #333333;
        }

        /* Gradient / “image-like” slides */
        .pairCard--image .pairFontsLabel,
        .pairCard--image .previewHeading,
        .pairCard--image .previewBody {
            color: #ffffff;
        }

        .pairCard--solid {
            background-image: none;
        }

        .pairCard--image {
            background-color: #000000;
            background-image: var(--pair-bg-image);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            color: #ffffff;
        }

        .pairCard--image::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.7)
            );
            pointer-events: none;
        }

        .pairContent {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
        }

        .pairCardHeader {
            margin-bottom: 40px;
        }

        .pairFontsLabel {
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
        }

        .pairPreview {
            margin-bottom: 32px;
        }

        .previewHeading {
            font-size: 40px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            margin-bottom: 18px;
        }

        .previewBody {
            font-size: 14px;
            line-height: 1.9;
        }

        .pairFooter {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            font-size: 12px;
        }

        .pairCard--placeholder {
            min-height: 40vh;
            background: #050509;
            color: #f5f5f5;
        }

        /* ===== Shortlist section ===== */

        .shortlistSection {
            max-width: 960px;
            margin: 0 auto 72px;
            padding: 0 16px;
        }

        .shortlistHeader {
            margin-bottom: 16px;
        }

        .shortlistTitle {
            font-size: 16px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        .shortlistHint {
            margin-top: 4px;
            font-size: 12px;
            color: #b3b7c8;
        }

        .shortlistEmpty {
            border-radius: 8px;
            border: 1px dashed #262a3a;
            padding: 16px 14px;
            background: #10121b;
            font-size: 13px;
            color: #b3b7c8;
        }

        .shortlistList {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .shortlistItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 6px;
            background: #10121b;
            border: 1px solid #262a3a;
        }

        .shortlistItemText {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .shortlistName {
            font-size: 13px;
        }

        .shortlistMeta {
            font-size: 11px;
            color: #b3b7c8;
        }

        .shortlistRemove {
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid #444a60;
            background: transparent;
            color: #e1e5f5;
            cursor: pointer;
        }

        .shortlistRemove:hover {
            background: #f15a24;
            border-color: #f15a24;
            color: #ffffff;
        }

        /* ===== Footer placeholder ===== */

        .footer {
            margin-top: auto;
            padding: 24px 16px 32px;
            text-align: center;
            font-size: 12px;
            color: #7c8197;
        }

        .footer p + p {
            margin-top: 4px;
        }

        /* ===== Confirm modal ===== */

        .confirmOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 40;
        }

        .confirmDialog {
            width: 90%;
            max-width: 360px;
            background: #10121b;
            border-radius: 10px;
            border: 1px solid #262a3a;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.8);
            padding: 18px 18px 14px;
        }

        .confirmTitle {
            font-size: 14px;
            margin-bottom: 8px;
        }

        .confirmText {
            font-size: 12px;
            color: #b3b7c8;
            line-height: 1.7;
            margin-bottom: 14px;
        }

        .confirmFontName {
            color: #ffffff;
            font-weight: 600;
        }

        .confirmActions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }

        .confirmButton {
            font-size: 11px;
            padding: 5px 12px;
            border-radius: 999px;
            border: 1px solid #444a60;
            background: #10121b;
            color: #e1e5f5;
            cursor: pointer;
            transition: background 0.18s ease, border-color 0.18s ease,
                color 0.18s ease, transform 0.15s ease;
        }

        .confirmButton--secondary:hover {
            background: #181b26;
            transform: translateY(-1px);
        }

        .confirmButton--danger {
            border-color: #f15a24;
        }

        .confirmButton--danger:hover {
            background: #f15a24;
            border-color: #f15a24;
            color: #ffffff;
            transform: translateY(-1px);
        }

        /* ===== Toast ===== */

        .toast {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom: 72px;
            z-index: 30;
            background: #10121b;
            border-radius: 999px;
            border: 1px solid #262a3a;
            padding: 8px 18px;
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.75);
        }

        .toastText {
            font-size: 12px;
            color: #e1e5f5;
        }

        /* ===== Shortlist jump button ===== */

        .shortlistJumpButton {
            position: fixed;
            left: 16px;
            bottom: 16px;
            z-index: 20;
            font-size: 11px;
            padding: 6px 14px;
            border-radius: 999px;
            border: 1px solid #f00; /* debug border tumne rakha tha */
            background: #10121b;
            color: #e1e5f5;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            cursor: pointer;
            transition: background 0.18s ease, border-color 0.18s ease,
                color 0.18s ease, transform 0.15s ease;
        }

        .shortlistJumpButton:hover {
            background: #f15a24;
            border-color: #f15a24;
            color: #ffffff;
            transform: translateY(-1px);
        }

        @media (max-width: 600px) {
            .shortlistJumpButton {
                left: 12px;
                bottom: 12px;
                font-size: 10px;
                padding: 5px 12px;
            }

            .toast {
                bottom: 64px;
                max-width: 90%;
                text-align: center;
            }
        }
    `,
};
