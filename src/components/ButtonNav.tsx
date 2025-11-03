"use client";

import { useSectionsObserver } from "@/context/SectionsObserverContext";
import { open_sans } from "@/fonts";
import { scrollToSection } from "@/utils";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type ButtonNavType = {
  section: string;
  content: React.ReactNode;
  disableUnderlined?: boolean;
};

function ButtonNav({
  section,
  content,
  disableUnderlined = false,
}: ButtonNavType) {
  const {
    isSkillsVisible,
    isEducationVisible,
    isHeroVisible,
    isProjectsVisible,
    isContactVisible,
  } = useSectionsObserver();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = [
      { name: "", visible: isHeroVisible },
      { name: "skills", visible: isSkillsVisible },
      { name: "education", visible: isEducationVisible },
      { name: "projects", visible: isProjectsVisible },
      { name: "contact", visible: isContactVisible },
    ];

    sections.map((s) => {
      if (
        section === s.name &&
        s.visible &&
        sections.every((se) => s.name === se.name || !se.visible)
      ) {
        btnRef.current?.classList.add("active", "text-gold");
      } else if (section === s.name && !s.visible) {
        btnRef.current?.classList.remove("active", "text-gold");
      }
    });
  }, [
    isEducationVisible,
    isSkillsVisible,
    isHeroVisible,
    isProjectsVisible,
    isContactVisible,
    section,
  ]);

  return (
    <button
      ref={btnRef}
      className={clsx(
        open_sans.className,
        "gold-text-hover",
        disableUnderlined || "underlined-glow"
      )}
      onClick={() => scrollToSection(section)}
      style={{
        background: "transparent",
        border: "0",
        outline: "0",
        color: "#fff",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "500",
        width: "100%",
      }}
    >
      {content}
    </button>
  );
}

export default ButtonNav;
