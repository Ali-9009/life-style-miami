import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

export default function Layout() {
    const location = useLocation();
    const prevLocation = useRef(location);

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => {
                prevLocation.current = location;
            }}
        >
            <motion.div
                key={prevLocation.current.pathname}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{ position: "relative" }}
            >
                <Outlet context={{ location: prevLocation.current }} />
            </motion.div>
        </AnimatePresence>
    );
}