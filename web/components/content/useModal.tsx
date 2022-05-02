import type {ReactElement} from 'react'
import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import {SxProps} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import ModalCloseButton from './ModalCloseButton'
import useModalState from './useModalState'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

interface useModalProps {
  sx?: SxProps
  TransitionComp?: ReactElement
  title?: JSX.Element | string
  content: JSX.Element
  actions?: JSX.Element
  buttonLabel?: string
}

// @ts-ignore
export default function useModal({sx, TransitionComp = Fade, title, content, actions, buttonLabel}: useModalProps) {
  const theme = useTheme()
  const state = useModalState({sx})
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const button = <Button onClick={state.handleOpen}>{buttonLabel || `Open modal`}</Button>

  const modal = <Dialog
    aria-labelledby={`${state.id}-modal-title`}
    aria-describedby={`${state.id}-modal-description`}
    open={state.open}
    onClose={state.handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    scroll={'body'}
    fullScreen={fullScreen}
    sx={state.modalStyles}
  >
    {/*// @ts-ignore*/}
    <DialogTitle id={`${state.id}-modal-title`} sx={{m: 0, p: 2}}>
      {title}
      <ModalCloseButton onClose={state.handleClose} />
    </DialogTitle>
    <DialogContent id={`${state.id}-modal-description`} dividers={!!title || !!actions}>
      {content}
    </DialogContent>
    {actions && <DialogActions>
      {actions}
    </DialogActions>}
  </Dialog>

  return {
    ...state,
    button,
    modal,
  }
}

