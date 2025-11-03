export type SocialsType = {
  icon: React.ReactNode;
  url: string;
  title: string;
};

export type SkillCardType = {
  title: string;
  src: string;
  alt: string;
};

export type ProjectsDataType = {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  github: {
    disabled: boolean;
    url: string;
  };
  live: {
    disabled: boolean;
    url: string;
  };
  images: string[];
}[];
