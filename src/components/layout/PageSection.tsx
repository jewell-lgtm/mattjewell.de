import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

type Props = FlexProps;

export function PageSection(props: Props) {
  return (
    <Flex as="section" width="full" height="100vh" {...props}>
      {props.children}
    </Flex>
  );
}
