import * as React from 'react'
import {safeWindow} from '@web/components/lib'

export default function useFooterState() {
  const [state, setState] = React.useState(() => ({
    display: false,
    previousScroll: safeWindow?.scrollY,
  }))

  /**
   * On scroll, hide the footer as the user scrolls down, but show it again on scroll up.
   */
  const hideShowFooterOnScroll = React.useCallback(() => {
    const {scrollY: currentScrollPos, innerHeight} = safeWindow
    const maxScroll = document.body.scrollHeight - innerHeight
    // If we scroll down, hide the footer, unless we're near the end of the page. On scroll up, show it again.
    const display = currentScrollPos < (innerHeight * .7) || currentScrollPos < state.previousScroll ||
      currentScrollPos >= maxScroll - 300

    setState({
      display,
      previousScroll: currentScrollPos,
    })
  }, [state])

  React.useEffect(() => {
    // Start event listener
    window.addEventListener('scroll', hideShowFooterOnScroll)

    // Always clean up event listeners
    return () => {
      window.removeEventListener('scroll', hideShowFooterOnScroll)
    }
  })

  React.useLayoutEffect(() => {
    // Slightly offset the load of the footer animation.
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        display: true,
      }))
    }, 10)
  }, [])

  return state
}