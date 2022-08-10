import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TwelveOclock = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

TwelveOclock.displayName = 'TwelveOclock'
TwelveOclock.defaultProps = {}

export default TwelveOclock
