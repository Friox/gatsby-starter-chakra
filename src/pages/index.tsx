import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ColorModeButton } from '@/components/ui/color-mode'
import { Container, Flex, Text, Stack } from '@chakra-ui/react'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container height='100vh' alignContent='center'>
      <Flex justifyContent='center'>
        <Stack width='fit-content'>
          <Text textAlign='center'>Hello, World!</Text>
          <ColorModeButton />
        </Stack>
      </Flex>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
