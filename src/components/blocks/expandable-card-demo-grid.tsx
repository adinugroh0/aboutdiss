import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Pastikan path ini benar

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<boolean>(false);
  const ref = useOutsideClick(() => setActive(false));

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setActive((prev) => !prev)}>
        Toggle Expandable Card
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="absolute top-0 left-0 bg-white p-4 border">
              This is an expandable card!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
