import React from 'react'
import NextImage from 'next/image'
import styled from "@emotion/styled"

export interface ImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  className?: string;
}

const Img = styled(NextImage)`
  height: auto;
`

export default function Image({src, alt, ...imageProps}: ImageProps) {
  return <Img {...imageProps} className={`next-image ${imageProps.className || ''}`} src={src} alt={alt} width={imageProps.width || 500} height={imageProps.height || 500} />
}
