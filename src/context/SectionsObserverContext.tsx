"use client";
import { useIntersection } from "@/hooks/useIntersection";
import React, { createContext, RefObject, useContext, useRef } from "react";

type SectionsObserverContextType = {
  heroRef: RefObject<HTMLElement | null>;
  isHeroVisible: boolean;
  skillsRef: RefObject<HTMLElement | null>;
  isSkillsVisible: boolean;
  educationRef: RefObject<HTMLElement | null>;
  isEducationVisible: boolean;
  projectsRef: RefObject<HTMLElement | null>;
  isProjectsVisible: boolean;
  contactRef: RefObject<HTMLElement | null>;
  isContactVisible: boolean;
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
  const contactRef = useRef<HTMLElement | null>(null);
  const isContactVisible = useIntersection(projectsRef);

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
        isProjectsVisible,
        contactRef,
        isContactVisible
      }}
    >
      {children}
    </SectionsObserverContext.Provider>
  );
};
