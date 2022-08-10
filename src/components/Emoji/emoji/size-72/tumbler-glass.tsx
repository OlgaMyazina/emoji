import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TumblerGlass = forwardRef(
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

TumblerGlass.displayName = 'TumblerGlass'
TumblerGlass.defaultProps = {}

export default TumblerGlass
