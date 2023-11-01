import { Markdown } from "@/components/Markdown";
import type { CaseStudy } from "@/data/caseStudy";

interface Props {
  caseStudy: CaseStudy;
}

export function ShowCaseStudy({ caseStudy: { title, subtitle, md } }: Props) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <Markdown source={md} />
    </>
  );
}
