const React = require("react")

interface WrapRootElementProps {
  element: JSX.Element
}

exports.wrapRootElement = ({element}: WrapRootElementProps) => {
  return (
    {element}
  )
}