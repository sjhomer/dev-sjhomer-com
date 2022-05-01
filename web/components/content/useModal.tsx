import * as React from 'react'
import {ReactElement} from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {SxProps} from '@mui/material'

// Default styles for modal.
const modalSx = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface useModalProps {
  sx: SxProps
  TransitionComp: ReactElement
}

// @ts-ignore
export default function useModal({sx, TransitionComp = Fade}: useModalProps) {
  const [open, setOpen] = React.useState(false)

  const toggleModal = (forced?: boolean) => {
    setOpen(forced ?? !open)
  }

  const button = <Button onClick={() => toggleModal(true)}>Open modal</Button>

  const modal = <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={() => toggleModal(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    {/*// @ts-ignore*/}
    <TransitionComp in={open}>
      <Box
        sx={{
          ...modalSx,
          ...sx,
        }}
      >
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="transition-modal-description" sx={{mt: 2}}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </TransitionComp>
  </Modal>

  return {
    button,
    modal,
    toggleModal,
  }
}
