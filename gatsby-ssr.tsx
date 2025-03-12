import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ChakraProvider>
  )
}