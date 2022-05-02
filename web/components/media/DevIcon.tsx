import * as React from 'react'

interface DevIconProps {
  type: string
  plain?: boolean
}

export default function DevIcon({type, plain = true}: DevIconProps) {
  return <i className={`devicon-${type}${plain ? '-plain' : ''}`} aria-label={`${type.toUpperCase()} icon`} />
}