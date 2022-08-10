import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PinchingHand = forwardRef(
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

PinchingHand.displayName = 'PinchingHand'
PinchingHand.defaultProps = {}

export default PinchingHand
