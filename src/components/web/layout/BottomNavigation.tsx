import * as React from 'react'
import Box from '@mui/material/Box'
import MuiBottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {links} from '@/config'

export default function BottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box
      sx={{
        width: 200, position: 'fixed', bottom: -5, left: 'calc(50% - 100px)',
        '.MuiBottomNavigation-root': {
          backgroundColor: 'transparent',
        },
        '.MuiSvgIcon-root': {
          fill: '#000',
        },
        '.MuiBottomNavigationAction-label': {
          color: '#000',
        },
      }}
    >
      <MuiBottomNavigation
        showLabels
        // value={value}
        onChange={(event, newValue) => {
          const win = window.open(newValue, '_blank')
          win?.focus()
        }}
      >
        {/*<BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>*/}
        {/*<BottomNavigationAction label="Résumé" icon={<PictureAsPdf/>} value={links.resume}/>*/}
        <BottomNavigationAction label="Connect" icon={<LinkedInIcon />} value={links.linkedin} />
      </MuiBottomNavigation>
    </Box>
  )
}
