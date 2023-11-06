import json from "../../public/cv-en.json";

export type ResumeWorkItem = {
  name: string;
  position: string;
  startDate: string; // assuming the date is in the format "YYYY-MM-DD"
  highlights: string[];
  summary: string;
  url: string;
  location: string;
  technologies?: string[];
  endDate?: string; // Added as optional to handle cases where it might not be present
};

export type ResumeProjectItem = {
  name: string;
  company?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  url?: string;
  keySkills: string[];
};

export type ResumeSchema = Omit<Readonly<typeof json>, "work" | "projects"> & {
  // some manual massaging of the type
  work: ResumeWorkItem[];
  projects: ResumeProjectItem[];
};

export type ResumeBasics = ResumeSchema["basics"];
export type ResumeWork = ResumeSchema["work"];
export type ResumeVolunteer = ResumeSchema["volunteer"];
export type ResumeEducation = ResumeSchema["education"];
export type ResumeAwards = ResumeSchema["awards"];
export type ResumePublications = ResumeSchema["publications"];
export type ResumeSkills = ResumeSchema["skills"];
export type ResumeLanguages = ResumeSchema["languages"];
export type ResumeInterests = ResumeSchema["interests"];
export type ResumeReferences = ResumeSchema["references"];
export type ResumeProjects = ResumeSchema["projects"];

export const jsonResume = json as ResumeSchema;
