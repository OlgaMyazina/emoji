import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LargeYellowCircle = forwardRef(
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

LargeYellowCircle.displayName = 'LargeYellowCircle'
LargeYellowCircle.defaultProps = {}

export default LargeYellowCircle
