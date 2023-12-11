import * as React from 'react'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import MuiTabs, {TabsProps as MuiTabsProps} from '@mui/material/Tabs'

export interface ScrollingTab {
  label: string
  content: JSX.Element
}

interface TabsProps extends MuiTabsProps {
  ariaLabel: string
  tabs: ScrollingTab[]
}

export default function Tabs({ariaLabel, tabs, ...tabsProps}: TabsProps) {
  const [value, setValue] = React.useState('0')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <Box
        className={'tabs'}
        sx={{backgroundColor: 'background.paper', display: 'flex', justifyContent: 'center'}}
      >
        <MuiTabs {...tabsProps} onChange={handleChange} aria-label={ariaLabel}>
          {tabs.map(({label}, index) => (
            <Tab key={`tab-${encodeURI(label)}`} label={label} value={index.toString()} />
          ))}
        </MuiTabs>
        {tabs.map(({label, content}, index) => (
          <TabPanel key={`tab-panel-${encodeURI(label)}`} value={index.toString()} tabIndex={index}>
            {content}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  )
}
