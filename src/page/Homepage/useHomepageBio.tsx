import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import {ScrollingTab} from '@web/components/content'
import {DevIcon} from '@web/components/media'

interface useHomepageBioReturn {
  tabs: ScrollingTab[]
}

export default function useHomepageBio(): useHomepageBioReturn {
  const theme = useTheme()

  const tabs = [
    {
      label: 'Languages',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'html5'} />
          <DevIcon type={'css3'} />
          <DevIcon type={'sass'} />
          <DevIcon type={'javascript'} />
          <DevIcon type={'typescript'} />
          <DevIcon type={'nodejs'} />
          <DevIcon type={'php'} />
          <DevIcon type={'bash'} />
        </div>
      ),
    },

    {
      label: 'Libraries / Tooling',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'react'} />
          <DevIcon type={'redux'} />
          <DevIcon type={'gatsby'} />
          <DevIcon type={'npm-original-wordmark'} plain={false} />
          <DevIcon type={'yarn'} />
          <DevIcon type={'gulp'} />
          <DevIcon type={'eslint'} />
          <DevIcon type={'jest'} />
        </div>
      ),
    },
    {
      label: 'CMSs /  Databases',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'drupal'} />
          <DevIcon type={'wordpress'} />
          <DevIcon type={'graphql'} />
          <DevIcon type={'mongodb'} />
          <DevIcon type={'mysql'} />
          <DevIcon type={'postgresql'} />
        </div>
      ),
    },
    {
      label: 'IDEs / VCS',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'phpstorm'} />
          <DevIcon type={'webstorm'} />
          <DevIcon type={'atom'} />
          <DevIcon type={'vscode'} />
          <DevIcon type={'git'} />
          <DevIcon type={'github'} />
          <DevIcon type={'bitbucket'} />
        </div>
      ),
    },
    {
      label: 'Cloud / Serverless',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'jamstack'} />
          <DevIcon type={'docker'} />
          <DevIcon type={'amazonwebservices'} />
          <DevIcon type={'firebase'} />
          <DevIcon type={'digitalocean'} />
        </div>
      ),
    },
    {
      label: 'Design Systems / Tools',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'materialui'} />
          <DevIcon type={'figma'} />
          <DevIcon type={'storybook'} />
          <DevIcon type={'gimp'} />
          <DevIcon type={'bootstrap'} />
          <DevIcon type={'foundation'} />
        </div>
      ),
    },
    {
      label: 'PM / Documentation',
      content: (
        <div className={'homepage-bio-tab-icons'}>
          <DevIcon type={'confluence'} />
          <DevIcon type={'jira'} />
          <DevIcon type={'trello'} />
          <DevIcon type={'slack'} />
          <DevIcon type={'markdown'} />
        </div>
      ),
    },
  ]

  return {
    tabs,
  }
}