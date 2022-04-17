import * as React from "react"
import Box from '@mui/material/Box'

interface HeaderProps {
  title?: string,
  children?: JSX.Element,
}

export default function Header({title, children}: HeaderProps) {
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
        <h1>{title}</h1>
      {children}
    </Box>
  )
}