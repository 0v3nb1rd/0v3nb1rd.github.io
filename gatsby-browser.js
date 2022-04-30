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
//
