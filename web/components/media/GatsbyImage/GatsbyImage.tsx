import React from 'react'
import useImageData from './useImageData'
import {GatsbyImage as GImage, Layout} from 'gatsby-plugin-image'

export interface ImageProps {
  src: string,
  layout?: Layout,
  alt: string,
}

export default function GatsbyImage({src, layout, alt}: ImageProps) {
  const image = useImageData(src, layout)
  return src ? <GImage image={image} alt={alt} /> : null
}