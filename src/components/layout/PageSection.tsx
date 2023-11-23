import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = FlexProps;

export const PageSection = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <Flex as="section" width="full" height="100vh" {...rest} ref={ref}>
        {children}
      </Flex>
    );
  }
);

PageSection.displayName = "PageSection";
