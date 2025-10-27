import { open_sans } from "@/fonts";
import { scrollToSection } from "@/utils";
import clsx from "clsx";
import React from "react";

type ButtonNavType = {
  section: string;
  content: React.ReactNode;
  hash: string;
  disableUnderlined?: boolean;
};

function ButtonNav({
  section,
  content,
  hash,
  disableUnderlined = false,
}: ButtonNavType) {
  return (
    <button
      className={clsx(
        open_sans.className,
        "gold-text-hover text-bold-500",
        disableUnderlined || "underlined-glow",
        hash.replace("#", "") === section && "active text-gold"
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
