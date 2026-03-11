"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    // Re-bind on DOM changes
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null; // Disable on mobile devices
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-rose-500 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[99] mix-blend-screen"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          borderColor: linkHovered ? "rgba(244, 63, 94, 0.5)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
