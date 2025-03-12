import React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{element}</ColorModeProvider>
    </ChakraProvider>
  )
}