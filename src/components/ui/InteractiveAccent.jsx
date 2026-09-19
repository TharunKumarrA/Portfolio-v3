"use client";
import { motion, useReducedMotion } from "framer-motion";
export function InteractiveAccent() {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className="hero-mark"
      whileHover={reduced ? undefined : { rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      ✳
    </motion.span>
  );
}
