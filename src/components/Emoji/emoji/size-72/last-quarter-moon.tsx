import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LastQuarterMoon = forwardRef(
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

LastQuarterMoon.displayName = 'LastQuarterMoon'
LastQuarterMoon.defaultProps = {}

export default LastQuarterMoon
