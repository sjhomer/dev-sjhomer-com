import React from 'react'
import useImageData from './useImageData'
import {GatsbyImage as GImage, Layout} from 'gatsby-plugin-image'

export interface ImageProps {
  src: string,
  layout?: Layout,
  alt: string,
  width?: number;
  height?: number;
}

export default function GatsbyImage({src, layout, alt, ...imageProps}: ImageProps) {
  const image = useImageData(src, layout)
  return src ? <GImage {...imageProps} image={image} alt={alt} /> : null
}