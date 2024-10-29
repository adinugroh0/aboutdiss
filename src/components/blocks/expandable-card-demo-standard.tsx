import React, { useEffect, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Pastikan path ini benar

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<boolean | null>(null);
  const ref = useOutsideClick(() => setActive(null)); // Hanya 1 argumen

  return (
    <div ref={ref}>
      <button
        onClick={() => setActive((prev) => (prev === null ? true : null))}>
        Toggle Expandable Card
      </button>
      {active && (
        <div className="expandable-card">This is an expandable card!</div>
      )}
    </div>
  );
}
