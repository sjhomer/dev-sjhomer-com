import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function FooterCopyrightNotice() {
  return <Container maxWidth={'xl'}>
    <Box
      sx={{
        color: '#000',
        position: 'absolute',
        fontSize: {
          xs: 10,
          lg: 14,
        },
        right: {
          xs: '5%',
          sm: '10%',
          lg: '20%'
        },
        bottom: {
          xs: 5,
          lg: 10,
        },
        width: {
          xs: 50,
          lg: 'auto',
        }
      }}
    >
      SJ Homer © {new Date().getFullYear()}
    </Box>
  </Container>
}