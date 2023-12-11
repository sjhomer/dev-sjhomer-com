import React from 'react'
import NextImage from 'next/image'

export interface ImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  className?: string;
}

export default function Image({src, alt, ...imageProps}: ImageProps) {
  return <NextImage {...imageProps} className={`next-image ${imageProps.className || ''}`} src={src} alt={alt} width={imageProps.width || 500} height={imageProps.height || 500} />
}
