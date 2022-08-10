import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const AirplaneArrival = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

AirplaneArrival.displayName = 'AirplaneArrival'
AirplaneArrival.defaultProps = {}

export default AirplaneArrival
