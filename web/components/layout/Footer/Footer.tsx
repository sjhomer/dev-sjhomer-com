import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '../BottomNavigation'
import FooterSeparator from '../FooterSepartor'
import {useTheme} from '@mui/material/styles'
import useFooterState from './useFooterState'
import FooterCopyrightNotice from './FooterCopywriteNotice'

interface FooterProps {
  copyright?: string,
}

export default function Footer({copyright}: FooterProps) {
  const theme = useTheme()
  const state = useFooterState()

  return (
    // <HideScroll variant="down">
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        zIndex: 2,
        width: {
          xs: '100%',
          lg: 1200,
        },
        left: {
          xs: 0,
          lg: 'calc(50% - 600px)',
        },
        // maxWidth: 1600,
        // width: '100vw',
        transform: state.display ? 'translateY(0)' : 'translateY(400px)',
        transition: 'transform 1s ease-out',
      }}>
      <FooterSeparator/>
      <Box sx={{
        zIndex: 2,
      }}>
        <BottomNavigation/>
        <FooterCopyrightNotice/>
      </Box>
    </Box>
    // </HideScroll>
  )
}