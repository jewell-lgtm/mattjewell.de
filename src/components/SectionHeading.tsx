import { ComponentProps } from "react";
import { Heading } from "@chakra-ui/react";

export function SectionHeading({
  children,
  ...props
}: ComponentProps<typeof Heading>) {
  return (
    <Heading size="lg" px={2} mb={4} {...props}>
      {children}
    </Heading>
  );
}
