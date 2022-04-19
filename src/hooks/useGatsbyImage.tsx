import React from 'react'
import useImageData from "./useImageData"
import {GatsbyImage, Layout} from "gatsby-plugin-image"

interface ImageProps {
  src: string,
  layout?: Layout,
  alt: string,
}

export default function useGatsbyImage({src, layout, alt}: ImageProps) {
  const image = useImageData(src, layout)
  return src ? <GatsbyImage image={image} alt={alt}/> : null
}