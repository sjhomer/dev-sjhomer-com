import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import {CtaLinkCardProps, useCtaLinkCardModals} from '@/components/web/cards'
import projectDrupalPortals from './portfolio/projectDrupalPortals'
import projectGlobalEcommSolution from './portfolio/projectGlobalEcommSolution'
import projectBitbuy from './portfolio/projectBitbuy'
import projectETC from './portfolio/projectETC'
import projectLongos from './portfolio/projectLongos'
import projectRecoveryGPT from "@/components/Homepage/portfolio/projectRecoveryGPT"

interface useHomepagePortfolioReturn {
  ctas: CtaLinkCardProps[]
  modals: JSX.Element[]
}

export default function useHomepagePortfolio(): useHomepagePortfolioReturn {
  const theme = useTheme()

  const data = [
    useCtaLinkCardModals(projectRecoveryGPT),
    useCtaLinkCardModals(projectGlobalEcommSolution),
    useCtaLinkCardModals(projectETC),
    useCtaLinkCardModals(projectBitbuy),
    useCtaLinkCardModals(projectLongos),
    useCtaLinkCardModals(projectDrupalPortals),
  ]

  const modals = data.map((data) => data.modal)
  const ctas = data.map((data) => data.cta)
  return {ctas, modals}
}
