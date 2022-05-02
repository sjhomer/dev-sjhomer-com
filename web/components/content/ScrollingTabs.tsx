import * as React from 'react'
import Tab, {tabClasses} from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Tabs from '@mui/material/Tabs'

export interface ScrollingTab {
  label: string
  content: JSX.Element
}

interface ScrollingTabsProps {
  ariaLabel: string
  tabs: ScrollingTab[]
}

export default function ScrollingTabs({ariaLabel, tabs}: ScrollingTabsProps) {
  const [value, setValue] = React.useState('0')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        backgroundColor: 'background.paper',
        // [`& .${tabsClasses.scrollButtons}`]: {
        //   '&.Mui-disabled': {opacity: 0.3},
        // },
        [`& .${tabClasses.root}`]: {
          textTransform: 'none',
        },
      }}
    >
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs
            onChange={handleChange}
            aria-label={ariaLabel}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {tabs.map(({label}, index) => (
              <Tab key={`tab-${encodeURI(label)}`} label={label} value={index.toString()} />
            ))}
          </Tabs>
        </Box>
        {tabs.map(({label, content}, index) => (
          <TabPanel
            key={`tab-panel-${encodeURI(label)}`} value={index.toString()}
          >
            {content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}
