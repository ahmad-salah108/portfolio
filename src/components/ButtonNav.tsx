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
  
  const { isSkillsVisible, isEducationVisible, isHeroVisible, isProjectsVisible, isContactVisible } = useSectionsObserver();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (
      section === "" &&
      isHeroVisible &&
      !isSkillsVisible &&
      !isEducationVisible && 
      !isProjectsVisible &&
      !isContactVisible
    ) {
      btnRef.current?.classList.add("active", "text-gold");
    } else if (!isHeroVisible && section === "") {
      btnRef.current?.classList.remove("active", "text-gold");
    }
    if (
      section === "skills" &&
      isSkillsVisible &&
      !isHeroVisible &&
      !isEducationVisible &&
      !isProjectsVisible &&
      !isContactVisible
    ) {
      btnRef.current?.classList.add("active", "text-gold");
    } else if (!isSkillsVisible && section === "skills") {
      btnRef.current?.classList.remove("active", "text-gold");
    }
    if (
      section === "education" &&
      isEducationVisible &&
      !isSkillsVisible &&
      !isHeroVisible &&
      !isProjectsVisible &&
      !isContactVisible
    ) {
      btnRef.current?.classList.add("active", "text-gold");
    } else if (!isEducationVisible && section === "education") {
      btnRef.current?.classList.remove("active", "text-gold");
    }
    if (
      section === "projects" &&
      isProjectsVisible &&
      !isSkillsVisible &&
      !isHeroVisible &&
      !isEducationVisible &&
      !isContactVisible
    ) {
      btnRef.current?.classList.add("active", "text-gold");
    } else if (!isProjectsVisible && section === "projects") {
      btnRef.current?.classList.remove("active", "text-gold");
    }
    if (
      section === "contact" &&
      isContactVisible &&
      !isSkillsVisible &&
      !isHeroVisible &&
      !isEducationVisible &&
      !isProjectsVisible
    ) {
      btnRef.current?.classList.add("active", "text-gold");
    } else if (!isContactVisible && section === "contact") {
      btnRef.current?.classList.remove("active", "text-gold");
    }
  }, [isEducationVisible, isSkillsVisible, isHeroVisible, isProjectsVisible, isContactVisible, section]);

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
