import { Flex, FlexProps } from "@chakra-ui/react";

type Props = FlexProps;

export const PageSection = (props: Props) => {
  return (
    <Flex as="section" width="full" height="100vh" {...props}>
      {props.children}
    </Flex>
  );
};
