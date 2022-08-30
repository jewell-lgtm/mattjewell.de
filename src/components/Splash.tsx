import Image from "next/image"
import { Text, VStack } from "@chakra-ui/react"

export function Splash() {
  return (
    <VStack bg="gray.200" height="100vh" justifyContent="center">
      <Image
        src="/logo.png"
        width={800}
        height={200}
        alt="Matthew Jewell Consulting"
      />
      <Text>
        All the codes, all the time{" "}
        <a
          href="https://www.linkedin.com/in/mattjewell1/details/experience/"
          target="_blank"
          rel="noreferrer"
        >
          since 2011
        </a>
        . Site &copy; {new Date().getFullYear()}
      </Text>
    </VStack>
  )
}
