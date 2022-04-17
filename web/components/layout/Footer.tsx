import * as React from "react"
import Box from '@mui/material/Box'

interface FooterProps {
  copyright?: string,
}

export default function Footer({copyright}: FooterProps) {
  return (
    <Box
      sx={{
        // this uses the value from `theme.space[4]`
        p: 4,
        // these use values from `theme.colors`
        color: "background",
        backgroundColor: "primary",
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {copyright}
    </Box>
  )
}