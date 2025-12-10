// src/App.jsx
import React, { useMemo, useState, useRef } from "react";
import { Styled } from "./App.styled";
import { fontPairs } from "./data/fontPairs";
import Hero from "./components/hero";
import ScrollTopButton from "./components/scrollTopButton";
import Footer from "./components/footer";
import { smoothScrollTo } from "./utils/smoothScroll";

const App = () => {
    const [search, setSearch] = useState("");
    const [useCase, setUseCase] = useState("");
    const [mood, setMood] = useState("");

    // === Theme (dark / light) ===
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("fps_theme") || "dark";
        } catch {
            return "dark";
        }
    });

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    React.useEffect(() => {
        try {
            localStorage.setItem("fps_theme", theme);
        } catch { }
    }, [theme]);

    const [shortlistIds, setShortlistIds] = useState(() => {
        try {
            const stored = localStorage.getItem("fps_shortlist");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    React.useEffect(() => {
        try {
            localStorage.setItem("fps_shortlist", JSON.stringify(shortlistIds));
        } catch { }
    }, [shortlistIds]);

    const [confirmState, setConfirmState] = useState({
        open: false,
        targetId: null,
        targetName: "",
    });

    const [toast, setToast] = useState({
        open: false,
        message: "",
    });

    const toastTimerRef = useRef(null);

    const showToast = (message) => {
        setToast({ open: true, message });

        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
        }

        toastTimerRef.current = setTimeout(() => {
            setToast({ open: false, message: "" });
        }, 2200);
    };

    const handleResetFilters = () => {
        setSearch("");
        setUseCase("");
        setMood("");
    };

    const handleAddToShortlist = (id) => {
        setShortlistIds((prev) => {
            if (prev.includes(id)) {
                showToast("Already in shortlist");
                return prev;
            }
            showToast("Added to shortlist");
            return [...prev, id];
        });
    };

    const handleRemoveFromShortlist = (id) => {
        setShortlistIds((prev) => prev.filter((item) => item !== id));
    };

    const openRemoveConfirm = (pair) => {
        setConfirmState({
            open: true,
            targetId: pair.id,
            targetName: pair.name,
        });
    };

    const closeRemoveConfirm = () => {
        setConfirmState({
            open: false,
            targetId: null,
            targetName: "",
        });
    };

    const handleConfirmRemove = () => {
        if (confirmState.targetId) {
            handleRemoveFromShortlist(confirmState.targetId);
        }
        closeRemoveConfirm();
    };

    const handleCopyCss = (pair) => {
        const cssSnippet = `
/* FontPair Studio suggestion: ${pair.name} */

h1, h2, h3 {
    font-family: "${pair.headingFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body, p, span, li {
    font-family: "${pair.bodyFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
        `.trim();

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(cssSnippet).catch(() => { });
        }
        showToast("CSS snippet copied");
    };

    const handleOpenFonts = (pair) => {
        const { headingUrl, bodyUrl } = pair.googleFonts || {};
        if (headingUrl) {
            window.open(headingUrl, "_blank", "noopener");
        }
        if (bodyUrl) {
            window.open(bodyUrl, "_blank", "noopener");
        }
    };

    const handleJumpToShortlist = () => {
        const el = document.querySelector(".shortlistSection");
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const currentY = window.scrollY || window.pageYOffset || 0;
        const targetY = rect.top + currentY - 16;

        smoothScrollTo(targetY, 500);
    };

    const filteredPairs = useMemo(() => {
        return fontPairs.filter((pair) => {
            const searchText = search.trim().toLowerCase();
            const matchesSearch =
                !searchText ||
                pair.name.toLowerCase().includes(searchText) ||
                pair.headingFont.toLowerCase().includes(searchText) ||
                pair.bodyFont.toLowerCase().includes(searchText);

            const matchesUseCase = !useCase || pair.useCases.includes(useCase);
            const matchesMood = !mood || pair.moods.includes(mood);

            return matchesSearch && matchesUseCase && matchesMood;
        });
    }, [search, useCase, mood]);

    const shortlistedPairs = useMemo(
        () => fontPairs.filter((pair) => shortlistIds.includes(pair.id)),
        [shortlistIds]
    );

    return (
        <Styled.App
            className={theme === "light" ? "theme-light" : "theme-dark"}
        >
            {/* Full-screen hero */}
            <Hero />

            {/* Top toolbar: search + filters */}
            <section className="toolbar" id="pairs-start">
                <div className="toolbarLeft">
                    <div className="fieldGroup">
                        <label htmlFor="search" className="fieldLabel">
                            Search fonts
                        </label>
                        <input
                            id="search"
                            type="text"
                            className="fieldInput"
                            placeholder="Search by font name or pair..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="fieldGroup">
                        <label htmlFor="useCase" className="fieldLabel">
                            Use-case
                        </label>
                        <select
                            id="useCase"
                            className="fieldSelect"
                            value={useCase}
                            onChange={(e) => setUseCase(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="blog">Blog</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="saas">SaaS / Landing</option>
                            <option value="resume">Resume</option>
                            <option value="dashboard">Dashboard UI</option>
                            <option value="documentation">
                                Documentation
                            </option>
                        </select>
                    </div>

                    <div className="fieldGroup">
                        <label htmlFor="mood" className="fieldLabel">
                            Mood
                        </label>
                        <select
                            id="mood"
                            className="fieldSelect"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="minimal">Minimal</option>
                            <option value="bold">Bold</option>
                            <option value="playful">Playful</option>
                            <option value="elegant">Elegant</option>
                            <option value="classic">Classic</option>
                            <option value="modern">Modern</option>
                            <option value="techy">Techy</option>
                            <option value="calm">Calm</option>
                            <option value="refined">Refined</option>
                            <option value="casual">Casual</option>
                            <option value="confident">Confident</option>
                        </select>
                    </div>
                </div>

                <div className="toolbarRight">
                    <button
                        type="button"
                        className="ghostButton"
                        onClick={handleResetFilters}
                    >
                        Reset filters
                    </button>
                    <button
                        type="button"
                        className="themeToggle"
                        onClick={handleToggleTheme}
                    >
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </button>
                </div>
            </section>

            {/* Main layout: full-screen font pair sections + shortlist below */}
            <section className="bodyLayout">
                <div className="pairsSection">
                    <div className="sectionHeader">
                        <h2 className="sectionTitle">Font pairs</h2>
                        <p className="sectionHint">
                            Scroll through full-screen previews. Sections
                            alternate between flat colour blocks and richer
                            gradient slides.
                        </p>
                    </div>

                    <div className="pairsGrid">
                        {filteredPairs.map((pair, index) => {
                            const isImageVariant = index % 2 === 1;

                            const cardClassName = [
                                "pairCard",
                                isImageVariant
                                    ? "pairCard--image"
                                    : "pairCard--solid",
                            ]
                                .filter(Boolean)
                                .join(" ");

                            const cardStyle = {
                                "--pair-bg-color":
                                    pair.backgroundColor || "",
                                "--pair-text-color": pair.textColor || "",
                                "--pair-bg-image": pair.backgroundImage || "",
                            };

                            return (
                                <article
                                    key={pair.id}
                                    className={cardClassName}
                                    style={cardStyle}
                                >
                                    <div className="pairContent">
                                        <header className="pairCardHeader">
                                            <p className="pairFontsLabel">
                                                {pair.headingFont},{" "}
                                                {pair.bodyFont}
                                            </p>
                                        </header>

                                        <div className="pairPreview">
                                            <h2 className="previewHeading">
                                                {pair.sampleHeading}
                                            </h2>
                                            <p className="previewBody">
                                                {pair.sampleBody}
                                            </p>
                                        </div>

                                        <footer className="pairFooter">
                                            <button
                                                type="button"
                                                className="linkButton"
                                                onClick={() =>
                                                    handleCopyCss(pair)
                                                }
                                            >
                                                Copy CSS
                                            </button>
                                            <button
                                                type="button"
                                                className="linkButton"
                                                onClick={() =>
                                                    handleOpenFonts(pair)
                                                }
                                            >
                                                Google Fonts
                                            </button>
                                            <button
                                                type="button"
                                                className="linkButton"
                                                onClick={() =>
                                                    handleAddToShortlist(
                                                        pair.id
                                                    )
                                                }
                                            >
                                                Add to shortlist
                                            </button>
                                        </footer>
                                    </div>
                                </article>
                            );
                        })}

                        {filteredPairs.length === 0 && (
                            <article className="pairCard pairCard--placeholder">
                                <div className="pairContent">
                                    <header className="pairCardHeader">
                                        <div>
                                            <h3 className="pairName">
                                                No font pairs found
                                            </h3>
                                            <p className="pairMeta">
                                                Try clearing a filter or
                                                changing your search.
                                            </p>
                                        </div>
                                    </header>
                                </div>
                            </article>
                        )}
                    </div>
                </div>

                {/* Shortlist below all slides */}
                <section className="shortlistSection">
                    <div className="shortlistHeader">
                        <h3 className="shortlistTitle">Shortlist</h3>
                        <p className="shortlistHint">
                            Use the “Add to shortlist” action to pin your
                            favourite font combinations.
                        </p>
                    </div>

                    {shortlistedPairs.length === 0 ? (
                        <div className="shortlistEmpty">
                            <p>No font pairs shortlisted yet.</p>
                            <small>
                                Shortlisted items will stay on this device for
                                now.
                            </small>
                        </div>
                    ) : (
                        <ul className="shortlistList">
                            {shortlistedPairs.map((pair) => (
                                <li key={pair.id} className="shortlistItem">
                                    <div className="shortlistItemText">
                                        <span className="shortlistName">
                                            {pair.name}
                                        </span>
                                        <span className="shortlistMeta">
                                            {pair.useCases.join(", ")} ·{" "}
                                            {pair.moods.join(", ")}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="shortlistRemove"
                                        onClick={() => openRemoveConfirm(pair)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </section>

            {/* Confirm remove modal */}
            {confirmState.open && (
                <div
                    className="confirmOverlay"
                    onClick={closeRemoveConfirm}
                >
                    <div
                        className="confirmDialog"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h4 className="confirmTitle">
                            Remove from shortlist?
                        </h4>
                        <p className="confirmText">
                            This will remove{" "}
                            <span className="confirmFontName">
                                {confirmState.targetName}
                            </span>{" "}
                            from your shortlist for this session.
                        </p>

                        <div className="confirmActions">
                            <button
                                type="button"
                                className="confirmButton confirmButton--secondary"
                                onClick={closeRemoveConfirm}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="confirmButton confirmButton--danger"
                                onClick={handleConfirmRemove}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />

            {/* Toast */}
            {toast.open && (
                <div className="toast">
                    <span className="toastText">{toast.message}</span>
                </div>
            )}

            {/* Jump to shortlist button (bottom-left) */}
            {shortlistedPairs.length > 0 && (
                <button
                    type="button"
                    className="shortlistJumpButton"
                    onClick={handleJumpToShortlist}
                >
                    Shortlist
                </button>
            )}

            <ScrollTopButton />
        </Styled.App>
    );
};

export default App;
