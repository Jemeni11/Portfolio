export type projectsArrayType = {
  id: string;
  category: string;
  projects: projectType[];
}[];

export type projectType = {
  id: string;
  imageBackground: string;
  image?: string;
  title: string;
  description: string;
  liveURL: string;
  sourceCodeURL: string;
};
