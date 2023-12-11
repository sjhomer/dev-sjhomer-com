import * as React from 'react'
import {SxProps} from '@mui/material'
import {useTheme} from '@mui/material/styles'

interface useModalDataProps {
  sx?: SxProps
}

export default function useModalState({sx}: useModalDataProps) {
  const theme = useTheme()
  // @ts-ignore
  const id = React.useId()
  const [open, setOpen] = React.useState(false)

  const toggleModal = (forced?: boolean) => {
    setOpen(forced ?? !open)
  }
  const handleOpen = () => toggleModal(true)
  const handleClose = () => toggleModal(false)

  // Combined default styles with custom ones if provided.
  const modalStyles = {
    '& .MuiPaper-root': {
      width: 1000,
      maxWidth: '90vw',
    },
    // p: 4,
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
    ...sx,
  }

  return {
    id,
    open,
    modalStyles,
    toggleModal,
    handleClose,
    handleOpen,
  }
}

