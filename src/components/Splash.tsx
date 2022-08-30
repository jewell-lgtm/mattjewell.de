import Image from "next/image"
import { Link, Text, VStack } from "@chakra-ui/react"

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
        <Link
          href="https://www.linkedin.com/in/mattjewell1/details/experience/"
          target="_blank"
          rel="noreferrer"
          isExternal
        >
          since 2011
        </Link>
        . Site &copy; {new Date().getFullYear()}
      </Text>
    </VStack>
  )
}
