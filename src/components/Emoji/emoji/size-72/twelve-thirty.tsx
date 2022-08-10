import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TwelveThirty = forwardRef(
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

TwelveThirty.displayName = 'TwelveThirty'
TwelveThirty.defaultProps = {}

export default TwelveThirty
