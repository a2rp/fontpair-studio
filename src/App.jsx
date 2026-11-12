// src/App.jsx
import { useEffect, useMemo, useState, useRef } from "react";
import { Styled } from "./App.styled";
import { fontPairs } from "./data/fontPairs";
import FontPairPreview from "./components/fontPairPreview";
import Hero from "./components/hero";
import ScrollTopButton from "./components/scrollTopButton";
import Footer from "./components/footer";
import Header from "./components/header";
import { smoothScrollTo } from "./utils/smoothScroll";

const knownPairIds = new Set(fontPairs.map((pair) => pair.id));
const useCaseFilters = [...new Set(fontPairs.flatMap((pair) => pair.useCases))].sort();
const moodFilters = [...new Set(fontPairs.flatMap((pair) => pair.moods))].sort();
const formatFilterLabel = (value) => value
    .split("-")
    .map((word) => word === "saas" ? "SaaS" : word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const App = () => {
    const [search, setSearch] = useState("");
    const [useCase, setUseCase] = useState("");
    const [mood, setMood] = useState("");

    // === Theme (dark / light) ===
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("fps_theme") === "light" ? "light" : "dark";
        } catch {
            return "dark";
        }
    });

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        try {
            localStorage.setItem("fps_theme", theme);
        } catch { /* Storage may be unavailable in restricted browsers. */ }
    }, [theme]);

    const [shortlistIds, setShortlistIds] = useState(() => {
        try {
            const stored = localStorage.getItem("fps_shortlist");
            const parsed = stored ? JSON.parse(stored) : [];
            return Array.isArray(parsed)
                ? [...new Set(parsed.filter((id) => typeof id === "string" && knownPairIds.has(id)))]
                : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("fps_shortlist", JSON.stringify(shortlistIds));
        } catch { /* Storage may be unavailable in restricted browsers. */ }
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
    const removeTriggerRef = useRef(null);

    useEffect(() => {
        if (!confirmState.open && removeTriggerRef.current) {
            if (removeTriggerRef.current.isConnected) {
                removeTriggerRef.current.focus();
            } else {
                document.getElementById("shortlist-title")?.focus();
            }
            removeTriggerRef.current = null;
        }
    }, [confirmState.open]);

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
        const alreadyShortlisted = shortlistIds.includes(id);
        if (!alreadyShortlisted) {
            setShortlistIds((current) => current.includes(id) ? current : [...current, id]);
        }
        showToast(alreadyShortlisted ? "Already in shortlist" : "Added to shortlist");
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

    const handleCopyCss = async (pair) => {
        const cssSnippet = `
/* FontPair Studio suggestion: ${pair.name} */

h1, h2, h3 {
    font-family: "${pair.headingFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body, p, span, li {
    font-family: "${pair.bodyFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
        `.trim();

        try {
            if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
            await navigator.clipboard.writeText(cssSnippet);
            showToast("CSS copied to clipboard");
        } catch {
            showToast("Copy failed. Check browser clipboard permissions and try again.");
        }
    };

    const handleConfirmKeyDown = (event) => {
        if (event.key === "Escape") {
            closeRemoveConfirm();
            return;
        }

        if (event.key !== "Tab") return;
        const buttons = event.currentTarget.querySelectorAll("button:not(:disabled)");
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
            event.preventDefault();
            lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
            event.preventDefault();
            firstButton.focus();
        }
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
            id="top"
            className={theme === "light" ? "theme-light" : "theme-dark"}
        >
            <Header />
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
                            <option value="">All use-cases</option>
                            {useCaseFilters.map((value) => (
                                <option key={value} value={value}>{formatFilterLabel(value)}</option>
                            ))}
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
                            <option value="">All moods</option>
                            {moodFilters.map((value) => (
                                <option key={value} value={value}>{formatFilterLabel(value)}</option>
                            ))}
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
                        {filteredPairs.map((pair) => (
                            <FontPairPreview
                                key={pair.id}
                                pair={pair}
                                index={fontPairs.indexOf(pair)}
                                onCopyCss={handleCopyCss}
                                onOpenFonts={handleOpenFonts}
                                onAddToShortlist={handleAddToShortlist}
                            />
                        ))}

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
                <section className="shortlistSection" id="shortlist">
                    <div className="shortlistHeader">
                        <h3
                            className="shortlistTitle"
                            id="shortlist-title"
                            tabIndex={-1}
                        >
                            Shortlist
                        </h3>
                        <p className="shortlistHint">
                            Use the "Add to shortlist" action to pin your
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
                                            {pair.useCases.join(", ")} -{" "}
                                            {pair.moods.join(", ")}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="shortlistRemove"
                                        onClick={(event) => {
                                            removeTriggerRef.current = event.currentTarget;
                                            openRemoveConfirm(pair);
                                        }}
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
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-title"
                        onKeyDown={handleConfirmKeyDown}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h4 className="confirmTitle" id="confirm-title">
                            Remove from shortlist?
                        </h4>
                        <p className="confirmText">
                            This will remove{" "}
                            <span className="confirmFontName">
                                {confirmState.targetName}
                            </span>{" "}
                            from your saved shortlist.
                        </p>

                        <div className="confirmActions">
                            <button
                                type="button"
                                className="confirmButton confirmButton--secondary"
                                onClick={closeRemoveConfirm}
                                autoFocus
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
                    <span
                        className="toastText"
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {toast.message}
                    </span>
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
