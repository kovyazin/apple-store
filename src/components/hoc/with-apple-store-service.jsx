import React from 'react'
import { AppleStoreServiceConsumer } from '../apple-store-service-context'

const withAppleStoreService = () => Wrapped => {
  return props => {
    return (
      <AppleStoreServiceConsumer>
        {appleStoreService => (
          <Wrapped {...props} appleStoreService={appleStoreService} />
        )}
      </AppleStoreServiceConsumer>
    )
  }
}

export default withAppleStoreService
