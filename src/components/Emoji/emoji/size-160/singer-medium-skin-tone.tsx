import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const SingerMediumSkinTone = forwardRef(
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

SingerMediumSkinTone.displayName = 'SingerMediumSkinTone'
SingerMediumSkinTone.defaultProps = {}

export default SingerMediumSkinTone
