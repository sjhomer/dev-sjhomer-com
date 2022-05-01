const React = require('react')

interface WrapRootElementProps {
  element: JSX.Element
}

exports.wrapPageElement = ({element}: WrapRootElementProps) => {
  return (
    {element}
  )
}