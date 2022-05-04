import React from 'react'
import GatsbyImage from './GatsbyImage/GatsbyImage'

export default function Logo() {
  return (
    <div style={{width: '200px', maxWidth: '100%', height: 'auto'}}>
      <GatsbyImage src={'/assets/images/favicon-sjhomer-code-wizard-alpha.png'} alt={'SJHomer Code Wizard'} />
    </div>
  )
}