import React from 'react'
import {useGatsbyImage} from "@src/hooks"

export default function Logo() {
  const image = useGatsbyImage({
    src: '/images/favicon-sjhomer-code-wizard-alpha.png',
    alt: 'SJHomer Code Wizard'
  })
  return (<div style={{width: '200px', maxWidth: '100%', height: 'auto'}}>
    {image}
  </div>)
}