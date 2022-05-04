import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import {CtaLinkCardProps} from '@web/components/cards'
import {useModal} from '@web/components/content'
import Typography from '@mui/material/Typography'
import {List, ListItem} from '@mui/material'
import {ChevronRight} from '@mui/icons-material'

interface useHomepagePortfolioReturn {
  ctas: CtaLinkCardProps[]
  modals: JSX.Element
}

export default function useHomepagePortfolio(): useHomepagePortfolioReturn {
  const theme = useTheme()

  const projectOneModal = useModal({
    title: 'Decoupled Global E-Commerce Website',
    content: <>
      <Typography gutterBottom>

      </Typography>
      <List>
        <ListItem>
          <ChevronRight />

        </ListItem>
      </List>
    </>,
  })
  const projectOne = {
    title: 'Decoupled Global E-Commerce Website',
    description: `Built with`,
    // imageData: {
    //   src: '/assets/images/evergrowth-mastermind-logo.png',
    //   alt: 'Homer On Olympus logo',
    // },
    links: [
      {
        label: 'Learn more',
        onClick: () => projectOneModal.toggleModal(),
      },
    ],
  }

  const projectTwoModal = useModal({
    title: 'Decoupled Application Form Wizard',
    content: <>
      <Typography gutterBottom>

      </Typography>
      <List>
        <ListItem>
          <ChevronRight />

        </ListItem>
      </List>
    </>,
  })
  const projectTwo = {
    title: 'Decoupled Application Form Wizard',
    description: `Built with`,
    // imageData: {
    //   src: '/assets/images/evergrowth-mastermind-logo.png',
    //   alt: 'Homer On Olympus logo',
    // },
    links: [
      {
        label: 'Learn more',
        onClick: () => projectOneModal.toggleModal(),
      },
    ],
  }

  const projectThreeModal = useModal({
    title: 'Decoupled Cyprto Fintech Website',
    content: <>
      <Typography gutterBottom>

      </Typography>
      <List>
        <ListItem>
          <ChevronRight />

        </ListItem>
      </List>
    </>,
  })
  const projectThree = {
    title: 'Decoupled Cyprto Fintech Website',
    description: `Built with`,
    // imageData: {
    //   src: '/assets/images/evergrowth-mastermind-logo.png',
    //   alt: 'Homer On Olympus logo',
    // },
    links: [
      {
        label: 'Learn more',
        onClick: () => projectOneModal.toggleModal(),
      },
    ],
  }

  const modals = <>
    {projectOneModal.modal}
    {projectTwoModal.modal}
    {projectThreeModal.modal}
  </>

  const ctas = [
    projectOne,
    projectTwo,
    projectThree,
  ]

  return {ctas, modals}
}