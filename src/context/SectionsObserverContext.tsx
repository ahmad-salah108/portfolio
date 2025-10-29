"use client";
import { useIntersection } from "@/hooks/useIntersection";
import React, { createContext, RefObject, useContext, useRef } from "react";

type SectionsObserverContextType = {
  heroRef: RefObject<HTMLElement>;
  isHeroVisible: boolean;
  skillsRef: RefObject<HTMLElement>;
  isSkillsVisible: boolean;
  educationRef: RefObject<HTMLElement>;
  isEducationVisible: boolean;
};

const SectionsObserverContext = createContext(
  {} as SectionsObserverContextType
);

export const useSectionsObserver = () => {
  return useContext(SectionsObserverContext);
};

export const SectionsObserverProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const isHeroVisible = useIntersection(heroRef);
  const skillsRef = useRef<HTMLElement | null>(null);
  const isSkillsVisible = useIntersection(skillsRef);
  const educationRef = useRef<HTMLElement | null>(null);
  const isEducationVisible = useIntersection(educationRef);

  return (
    <SectionsObserverContext.Provider
      value={{
        heroRef,
        isHeroVisible,
        skillsRef,
        isSkillsVisible,
        educationRef,
        isEducationVisible,
      }}
    >
      {children}
    </SectionsObserverContext.Provider>
  );
};
