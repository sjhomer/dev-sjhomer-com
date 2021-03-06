const React = require('react')
require('devicon/devicon.min.css')

interface WrapRootElementProps {
  element: JSX.Element
}

exports.wrapRootElement = ({element}: WrapRootElementProps) => {
  return (
    {element}
  )
}