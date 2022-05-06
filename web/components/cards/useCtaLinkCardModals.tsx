import * as React from 'react'
import {useModal} from '@web/components/content'
import {CtaLinkCardLink, CtaLinkCardProps} from './CtaLinkCard'
import {ImageProps} from '../media/GatsbyImage/GatsbyImage'

interface useCtaLinkCardModals {
  title: string
  description: string | JSX.Element
  modalContent?: JSX.Element
  imageData?: ImageProps
  links?: CtaLinkCardLink[]
}

interface useCtaLinkCardModalsReturn {
  cta: CtaLinkCardProps
  modal: JSX.Element
}

export default function useCtaLinkCardModals({
  title, description, imageData, links, modalContent,
}: useCtaLinkCardModals): useCtaLinkCardModalsReturn {
  const modal = useModal({
    title,
    content: modalContent,
  })

  const cta = {
    title,
    description,
    imageData,
    links: links || [],
  }
  if (modalContent) {
    cta.links.push({
      label: 'Learn more',
      onClick: () => modal.toggleModal(),
    })
  }

  return {
    cta,
    modal: modal.modal,
  }
}