'use client'

import { ThemeProvider as ThemeProviderNext } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { PropsWithChildren } from 'react'

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProviderNext attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProviderNext>
  )
}
