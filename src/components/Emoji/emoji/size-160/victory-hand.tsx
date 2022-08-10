import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const VictoryHand = forwardRef(
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

VictoryHand.displayName = 'VictoryHand'
VictoryHand.defaultProps = {}

export default VictoryHand
