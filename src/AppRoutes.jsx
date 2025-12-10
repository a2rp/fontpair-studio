// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const CoreTeam = lazy(() => import("./pages/coreTeam"));
const Membership = lazy(() => import("./pages/membership"));
const Events = lazy(() => import("./pages/events"));
const Sponsors = lazy(() => import("./pages/sponsors"));
const Resources = lazy(() => import("./pages/resources"));
const Gallery = lazy(() => import("./pages/gallery"));
const Contact = lazy(() => import("./pages/contact"));
const AboutDeveloper = lazy(() => import("./pages/aboutDeveloper"));
const NotFound = lazy(() => import("./pages/placeholder"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--color-bg)",
                    }}
                >
                    <CircularProgress sx={{ color: "var(--color-heading)" }} />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                {/* Redirect root to home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Main pages */}
                <Route path="/home" element={<Home />} />
                <Route path="/core-team" element={<CoreTeam />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-developer" element={<AboutDeveloper />} />

                {/* ---------- 404 ---------- */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
