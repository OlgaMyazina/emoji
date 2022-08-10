import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ServiceDog = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

ServiceDog.displayName = 'ServiceDog'
ServiceDog.defaultProps = {}

export default ServiceDog
