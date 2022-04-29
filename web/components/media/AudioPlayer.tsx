import * as React from 'react'
import {useEffect} from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Pause from '@mui/icons-material/Pause'
// import SkipNextIcon from '@mui/icons-material/SkipNext'
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import useSound from 'use-sound'

interface AudioPlayerProps {
  src: string
  title: string
  artist?: string
  album?: string
  cover?: string
}

const icons = {
  play: <PlayArrowIcon sx={{height: 38, width: 38}}/>,
  pause: <Pause sx={{height: 38, width: 38}}/>,
}

export default function AudioPlayer({src, title, artist, album, cover}: AudioPlayerProps) {
  const [state, setState] = React.useState({
    isPlaying: false,
    icon: icons.play
  })

  const [play, {stop, pause, duration, sound}] = useSound(
    src,
    {
      volume: 0.5,
      playbackRate: 1,
      // loop: true,
    }
  )

  const pauseOrPlay = () => {
    if (state.isPlaying) {
      pause()
      setState({
        isPlaying: false,
        icon: icons.play
      })
    } else {
      play()
      setState({
        isPlaying: true,
        icon: icons.pause
      })
    }
  }

  useEffect(() => {
    // play()
    // Ensure we unmount safely by stopping any possible playing audio.
    return () => {
      stop()
    }
  }, [])

  // Can't load if no audio found.
  if (!src || !sound) {
    return null
  }

  return (
    <Card sx={{display: 'flex'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          {artist && <Typography variant="subtitle1" color="text.secondary" component="div">
            {artist}
          </Typography>}
        </CardContent>
        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
          <IconButton aria-label="play/pause" onClick={pauseOrPlay}>
            {state.icon}
          </IconButton>
        </Box>
      </Box>
      {cover && <CardMedia
        component="img"
        sx={{width: 151}}
        image={cover}
        alt={`Listen to ${title}`}
      />}
    </Card>
  )
}
