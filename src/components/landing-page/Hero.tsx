import { Text, VStack } from "@chakra-ui/react"
import { _ } from "@/copy"

export function Hero() {
  return (
    <VStack align="left">
      <Text>{_("hero.1")}</Text>
      <Text>{_("hero.2")}</Text>
    </VStack>
  )
}
