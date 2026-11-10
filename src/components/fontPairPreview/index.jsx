import { useEffect, useRef, useState } from "react";

const FontPairPreview = ({ pair, index, onCopyCss, onOpenFonts, onAddToShortlist }) => {
    const cardRef = useRef(null);
    const [loadFonts, setLoadFonts] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return undefined;

        if (typeof IntersectionObserver === "undefined") {
            setLoadFonts(true);
            return undefined;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoadFonts(true);
                observer.disconnect();
            }
        }, { rootMargin: "240px 0px" });

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!loadFonts) return;

        const alreadyRequested = [...document.head.querySelectorAll("link[data-fontpair-id]")]
            .some((link) => link.dataset.fontpairId === pair.id);
        if (alreadyRequested) return;

        const fontRequest = new URL("https://fonts.googleapis.com/css2");
        fontRequest.searchParams.append("family", pair.headingFont);
        fontRequest.searchParams.append("family", pair.bodyFont);
        fontRequest.searchParams.set("display", "swap");

        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = fontRequest.toString();
        stylesheet.dataset.fontpairId = pair.id;
        document.head.appendChild(stylesheet);
    }, [loadFonts, pair.bodyFont, pair.headingFont, pair.id]);

    const cardClassName = [
        "pairCard",
        index % 2 === 1 ? "pairCard--image" : "pairCard--solid",
    ].join(" ");
    const cardStyle = {
        "--pair-bg-color": pair.backgroundColor || "",
        "--pair-text-color": pair.textColor || "",
        "--pair-bg-image": pair.backgroundImage || "",
    };

    return (
        <article ref={cardRef} className={cardClassName} style={cardStyle}>
            <div className="pairContent">
                <header className="pairCardHeader">
                    <p className="pairFontsLabel">{pair.headingFont}, {pair.bodyFont}</p>
                </header>

                <div className="pairPreview">
                    <h2 className="previewHeading" style={{ fontFamily: `"${pair.headingFont}", Georgia, serif` }}>
                        {pair.sampleHeading}
                    </h2>
                    <p className="previewBody" style={{ fontFamily: `"${pair.bodyFont}", system-ui, sans-serif` }}>
                        {pair.sampleBody}
                    </p>
                </div>

                <footer className="pairFooter">
                    <button type="button" className="linkButton" onClick={() => onCopyCss(pair)}>
                        Copy CSS
                    </button>
                    <button type="button" className="linkButton" onClick={() => onOpenFonts(pair)}>
                        Google Fonts
                    </button>
                    <button type="button" className="linkButton" onClick={() => onAddToShortlist(pair.id)}>
                        Add to shortlist
                    </button>
                </footer>
            </div>
        </article>
    );
};

export default FontPairPreview;
