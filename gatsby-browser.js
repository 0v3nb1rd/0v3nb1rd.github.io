import React from 'react'
import { Layout } from './src/components'
import cn from 'classnames'
import './src/styles/global.css'

// export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const wrapPageElement = ({ element, props }) => {
  const uriName = props.path.split('/')[1]
  return (
    <Layout
      page={cn({
        [`main--${uriName}`]: uriName,
      })}
      {...props}
    >
      {element}
    </Layout>
  )
}

const transitionDelay = 5000
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    // window.setTimeout(
    //   () => window.scrollTo(...(savedPosition || [0, 0])),
    //   transitionDelay
    // )
  }
  return false
}
