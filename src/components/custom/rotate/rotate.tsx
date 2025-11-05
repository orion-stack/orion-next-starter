"use client";
import { motion } from "motion/react";

export function Rotate() {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#98c379",
        borderRadius: 5,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
}
