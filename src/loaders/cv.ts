import json from "../../public/cv-en.json";

export type ResumeSchema = Readonly<typeof json> & {
  // some manual massaging of the type
  work: (typeof json["work"][number] & {
    startDate: string;
    endDate: string | null;
  })[];
};

export type ResumeBasics = ResumeSchema["basics"];
export type ResumeWork = ResumeSchema["work"];
export type ResumeWorkItem = ResumeSchema["work"][number];
export type ResumeVolunteer = ResumeSchema["volunteer"];
export type ResumeEducation = ResumeSchema["education"];
export type ResumeAwards = ResumeSchema["awards"];
export type ResumePublications = ResumeSchema["publications"];
export type ResumeSkills = ResumeSchema["skills"];
export type ResumeLanguages = ResumeSchema["languages"];
export type ResumeInterests = ResumeSchema["interests"];
export type ResumeReferences = ResumeSchema["references"];
export type ResumeProjects = ResumeSchema["projects"];
export type ResumeProjectItem = ResumeSchema["projects"][number];
export const jsonResume = json as ResumeSchema;
