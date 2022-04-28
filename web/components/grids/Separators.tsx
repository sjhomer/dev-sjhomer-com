// @ts-nocheck
import * as React from 'react'
import {Divider} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ForestIcon from '@mui/icons-material/Forest'
import SportsScoreTwoToneIcon from '@mui/icons-material/SportsScoreTwoTone'
import FilterHdrTwoToneIcon from '@mui/icons-material/FilterHdrTwoTone'
import HikingTwoToneIcon from '@mui/icons-material/HikingTwoTone'

export const ArrowSeparator = (props) => {
  return (
    <Divider {...props}><KeyboardArrowDownIcon/></Divider>
  )
}

export const BookSeparator = (props) => {
  return (
    <Divider {...props}><MenuBookIcon/></Divider>
  )
}

export const ForestSeparator = (props) => {
  return (
    <Divider {...props}><ForestIcon/></Divider>
  )
}

export const HikingSeparator = (props) => {
  return (
    <Divider {...props}><HikingTwoToneIcon/></Divider>
  )
}

export const MountainSeparator = (props) => {
  return (
    <Divider {...props}><FilterHdrTwoToneIcon/></Divider>
  )
}

export const FinishSeparator = (props) => {
  return (
    <Divider {...props}><SportsScoreTwoToneIcon/></Divider>
  )
}