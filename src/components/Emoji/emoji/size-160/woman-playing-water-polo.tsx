import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanPlayingWaterPolo = forwardRef(
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

WomanPlayingWaterPolo.displayName = 'WomanPlayingWaterPolo'
WomanPlayingWaterPolo.defaultProps = {}

export default WomanPlayingWaterPolo
