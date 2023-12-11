import React from 'react'
import Image from "@/components/web/media/Image"

export default function Logo() {
  return (
    <div style={{width: '200px', maxWidth: '100%', height: 'auto'}}>
      <Image src={'/assets/images/favicon-sjhomer-code-wizard-alpha.png'} alt={'SJHomer Code Wizard'} />
    </div>
  )
}
