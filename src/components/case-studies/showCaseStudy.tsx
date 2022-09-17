import { CaseStudy } from "@/data/caseStudy"
import { Markdown } from "@/components/Markdown"

interface Props {
  caseStudy: CaseStudy
}

export function ShowCaseStudy({ caseStudy: { title, subtitle, md } }: Props) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <Markdown source={md} />
    </>
  )
}
