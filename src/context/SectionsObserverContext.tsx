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
  projectsRef: RefObject<HTMLElement>;
  isProjectsVisible: boolean;
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
  const projectsRef = useRef<HTMLElement | null>(null);
  const isProjectsVisible = useIntersection(projectsRef);

  return (
    <SectionsObserverContext.Provider
      value={{
        heroRef,
        isHeroVisible,
        skillsRef,
        isSkillsVisible,
        educationRef,
        isEducationVisible,
        projectsRef,
        isProjectsVisible
      }}
    >
      {children}
    </SectionsObserverContext.Provider>
  );
};
