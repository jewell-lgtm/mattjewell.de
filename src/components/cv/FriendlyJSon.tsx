import { ResumeSchema } from "@/loaders/cv";
import { Box } from "@chakra-ui/react";

export function FriendlyJSON(props: { resume: ResumeSchema }) {
  return (
    <Box
      w="full"
      as="pre"
      overflow="auto"
      h="sm"
      color="green"
      onClick={(e: any) => {
        // select all text in the pre tag
        const range = document.createRange();
        range.selectNodeContents(e.target);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }}
    >
      {JSON.stringify(props.resume, null, 4)}
    </Box>
  );
}
