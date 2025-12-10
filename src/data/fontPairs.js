// src/data/fontPairs.js

export const fontPairs = [
    {
        id: "playfair-inter",
        name: "Playfair Display + Inter",
        headingFont: "Playfair Display",
        bodyFont: "Inter",
        useCases: ["blog", "portfolio", "documentation"],
        moods: ["elegant", "modern", "refined"],
        sampleHeading: "A better way to present your content",
        sampleBody:
            "Great for long-form articles, personal blogs and story-driven case studies where typography sets the tone.",
        backgroundColor: "#f6d982",
        textColor: "#222222",
        // soft warm gradient – used on “image” variant
        backgroundImage:
            "linear-gradient(135deg, #f6d982 0%, #f2c85b 45%, #f0b93a 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Playfair+Display",
            bodyUrl: "https://fonts.google.com/specimen/Inter",
        },
    },
    {
        id: "montserrat-open-sans",
        name: "Montserrat + Open Sans",
        headingFont: "Montserrat",
        bodyFont: "Open Sans",
        useCases: ["saas", "landing", "dashboard"],
        moods: ["modern", "bold", "confident"],
        sampleHeading: "Launch product experiences with clarity",
        sampleBody:
            "A versatile pair for SaaS landing pages, product dashboards and pricing sections that need clean hierarchy.",
        backgroundColor: "#0b1020",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(135deg, #151b2f 0%, #111827 45%, #02020a 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Montserrat",
            bodyUrl: "https://fonts.google.com/specimen/Open+Sans",
        },
    },
    {
        id: "lora-source-sans-pro",
        name: "Lora + Source Sans Pro",
        headingFont: "Lora",
        bodyFont: "Source Sans Pro",
        useCases: ["blog", "documentation", "resume"],
        moods: ["classic", "calm", "readable"],
        sampleHeading: "Make long reads feel effortless",
        sampleBody:
            "This pairing is ideal for editorial layouts, help centres and knowledge bases that need a quiet, trustworthy voice.",
        backgroundColor: "#f7f3ea",
        textColor: "#20201f",
        backgroundImage:
            "linear-gradient(135deg, #f7f3ea 0%, #ece1cf 45%, #dfd1b5 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Lora",
            bodyUrl: "https://fonts.google.com/specimen/Source+Sans+Pro",
        },
    },
    {
        id: "raleway-merriweather",
        name: "Raleway + Merriweather",
        headingFont: "Raleway",
        bodyFont: "Merriweather",
        useCases: ["portfolio", "blog"],
        moods: ["minimal", "refined", "elegant"],
        sampleHeading: "Tell visual stories with space to breathe",
        sampleBody:
            "High-contrast headlines with a bookish body font that works brilliantly for photo-heavy case studies.",
        backgroundColor: "#141826",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(160deg, #1f2937 0%, #020617 65%, #000000 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Raleway",
            bodyUrl: "https://fonts.google.com/specimen/Merriweather",
        },
    },
    {
        id: "poppins-roboto",
        name: "Poppins + Roboto",
        headingFont: "Poppins",
        bodyFont: "Roboto",
        useCases: ["saas", "dashboard", "mobile-app"],
        moods: ["modern", "techy", "confident"],
        sampleHeading: "Design system–ready typography",
        sampleBody:
            "Rounded geometric headings paired with a familiar UI body font – a safe choice for dashboards and internal tools.",
        backgroundColor: "#e4f0ff",
        textColor: "#121826",
        backgroundImage:
            "linear-gradient(135deg, #e4f0ff 0%, #c7ddff 45%, #a9c7ff 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Poppins",
            bodyUrl: "https://fonts.google.com/specimen/Roboto",
        },
    },
    {
        id: "abril-fatface-lato",
        name: "Abril Fatface + Lato",
        headingFont: "Abril Fatface",
        bodyFont: "Lato",
        useCases: ["portfolio", "marketing", "landing"],
        moods: ["bold", "playful", "elegant"],
        sampleHeading: "Make every hero section unforgettable",
        sampleBody:
            "A statement display face with a neutral body font – perfect for hero headlines and campaign sections.",
        backgroundColor: "#1f0b0f",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(135deg, #3b0d1b 0%, #14040a 45%, #050208 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Abril+Fatface",
            bodyUrl: "https://fonts.google.com/specimen/Lato",
        },
    },
    {
        id: "nunito-spectral",
        name: "Nunito + Spectral",
        headingFont: "Nunito",
        bodyFont: "Spectral",
        useCases: ["blog", "education", "docs"],
        moods: ["friendly", "calm", "approachable"],
        sampleHeading: "Teach complex topics with warmth",
        sampleBody:
            "Rounded headings and a highly readable serif make this great for course platforms and documentation hubs.",
        backgroundColor: "#f4f9f4",
        textColor: "#1a2520",
        backgroundImage:
            "linear-gradient(135deg, #f4f9f4 0%, #ddeee0 45%, #c3e0cd 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Nunito",
            bodyUrl: "https://fonts.google.com/specimen/Spectral",
        },
    },
    {
        id: "oswald-source-sans-pro",
        name: "Oswald + Source Sans Pro",
        headingFont: "Oswald",
        bodyFont: "Source Sans Pro",
        useCases: ["news", "landing", "banner"],
        moods: ["bold", "classic", "confident"],
        sampleHeading: "Give headlines a strong editorial voice",
        sampleBody:
            "Tall condensed headings paired with a neutral sans make this ideal for news-style layouts and promo sections.",
        backgroundColor: "#111111",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(180deg, #111827 0%, #020617 60%, #000000 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Oswald",
            bodyUrl: "https://fonts.google.com/specimen/Source+Sans+Pro",
        },
    },
    {
        id: "merriweather-sans-merriweather",
        name: "Merriweather Sans + Merriweather",
        headingFont: "Merriweather Sans",
        bodyFont: "Merriweather",
        useCases: ["blog", "documentation"],
        moods: ["classic", "calm", "trustworthy"],
        sampleHeading: "Blend product UI with editorial depth",
        sampleBody:
            "A soft sans for headings and a book-style serif body – great when you want product and content to feel cohesive.",
        backgroundColor: "#f3eee9",
        textColor: "#1f2022",
        backgroundImage:
            "linear-gradient(135deg, #f3eee9 0%, #e5dbcf 45%, #d3c3b3 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Merriweather+Sans",
            bodyUrl: "https://fonts.google.com/specimen/Merriweather",
        },
    },
    {
        id: "roboto-roboto-slab",
        name: "Roboto + Roboto Slab",
        headingFont: "Roboto",
        bodyFont: "Roboto Slab",
        useCases: ["dashboard", "blog", "docs"],
        moods: ["modern", "balanced", "versatile"],
        sampleHeading: "Ship interfaces that feel familiar",
        sampleBody:
            "A safe pairing that works almost anywhere – UI dashboards, technical blogs and mixed text–data layouts.",
        backgroundColor: "#edf1f7",
        textColor: "#181b26",
        backgroundImage:
            "linear-gradient(135deg, #edf1f7 0%, #d7e0f0 45%, #c1cfe7 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Roboto",
            bodyUrl: "https://fonts.google.com/specimen/Roboto+Slab",
        },
    },
    {
        id: "work-sans-space-grotesk",
        name: "Work Sans + Space Grotesk",
        headingFont: "Work Sans",
        bodyFont: "Space Grotesk",
        useCases: ["saas", "crypto", "tech"],
        moods: ["techy", "modern", "bold"],
        sampleHeading: "Design for data-heavy, futuristic products",
        sampleBody:
            "A slightly experimental tech pairing that shines in dashboards, analytics tools and landing pages for dev tools.",
        // backgroundColor: "#050816",
        backgroundColor: "#aaa",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(135deg, #020617 0%, #060826 35%, #020617 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Work+Sans",
            bodyUrl: "https://fonts.google.com/specimen/Space+Grotesk",
        },
    },
    {
        id: "dm-serif-display-karla",
        name: "DM Serif Display + Karla",
        headingFont: "DM Serif Display",
        bodyFont: "Karla",
        useCases: ["branding", "portfolio", "marketing"],
        moods: ["elegant", "refined", "modern"],
        sampleHeading: "Give brands a distinctive editorial flair",
        sampleBody:
            "High-contrast serif headlines paired with a contemporary grotesque body, ideal for brand sites and one-pagers.",
        backgroundColor: "#f5efe9",
        textColor: "#1f2933",
        backgroundImage:
            "linear-gradient(135deg, #f5efe9 0%, #e9ddcf 45%, #dac7b3 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/DM+Serif+Display",
            bodyUrl: "https://fonts.google.com/specimen/Karla",
        },
    },
    {
        id: "fira-sans-roboto-mono",
        name: "Fira Sans + Roboto Mono",
        headingFont: "Fira Sans",
        bodyFont: "Roboto Mono",
        useCases: ["docs", "developer-tools", "landing"],
        moods: ["techy", "minimal", "confident"],
        sampleHeading: "Explain APIs without losing the human touch",
        sampleBody:
            "A clear UI sans for narrative content and a crisp mono for code snippets, great for dev docs and landing pages.",
        // backgroundColor: "#0a1018",
        backgroundColor: "#ffffff",
        textColor: "#ffffff",
        backgroundImage:
            "linear-gradient(145deg, #020617 0%, #111827 55%, #020617 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Fira+Sans",
            bodyUrl: "https://fonts.google.com/specimen/Roboto+Mono",
        },
    },
    {
        id: "josefin-sans-domine",
        name: "Josefin Sans + Domine",
        headingFont: "Josefin Sans",
        bodyFont: "Domine",
        useCases: ["blog", "portfolio"],
        moods: ["retro", "playful", "elegant"],
        sampleHeading: "Add personality to minimalist layouts",
        sampleBody:
            "Quirky geometric headings with a traditional reading font – good for personal sites and editorial experiments.",
        backgroundColor: "#ffe3c4",
        textColor: "#2b2117",
        backgroundImage:
            "linear-gradient(135deg, #ffe3c4 0%, #ffcda0 45%, #ffb47a 100%)",
        googleFonts: {
            headingUrl: "https://fonts.google.com/specimen/Josefin+Sans",
            bodyUrl: "https://fonts.google.com/specimen/Domine",
        },
    },
];
