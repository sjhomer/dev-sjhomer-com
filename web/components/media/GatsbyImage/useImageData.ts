/**
 * From solution presented by @mosesoak on Gatsby/Storybook issue #31766
 * https://github.com/gatsbyjs/gatsby/discussions/31766?sort=old#discussioncomment-1309042
 */
import {IGatsbyImageData, Layout} from 'gatsby-plugin-image'
import {useEffect, useState} from 'react'

/**
 * For use with Storybook: spoofs a gatsby IGatsbyImageData blob by loading image to get w/h.
 *
 * @param filename Assumes src/images as base directory (set in package.json storybook script)
 * @param layout optional override for gatsby layout parameter
 * @return {IGatsbyImageData}
 */
export default function useImageData(filename: string, layout: Layout = 'constrained',) {
  // a default is provided so component types can treat it as defined
  const [imageData, setImageData] = useState<IGatsbyImageData>({
    layout: 'constrained', images: {fallback: {src: ''}}, width: 0, height: 0,
  })

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageData({
        layout, images: {fallback: {src: filename}}, width: img.width, height: img.height,
      })
    }
    img.src = filename

    return () => {
      img.onload = null
    }
  }, [filename, layout])

  return imageData
}