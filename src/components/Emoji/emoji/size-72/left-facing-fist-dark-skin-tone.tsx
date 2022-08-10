import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LeftFacingFistDarkSkinTone = forwardRef(
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

LeftFacingFistDarkSkinTone.displayName = 'LeftFacingFistDarkSkinTone'
LeftFacingFistDarkSkinTone.defaultProps = {}

export default LeftFacingFistDarkSkinTone
