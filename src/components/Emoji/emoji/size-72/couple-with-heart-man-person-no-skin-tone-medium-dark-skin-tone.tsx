import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartManPersonNoSkinToneMediumDarkSkinTone = forwardRef(
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

CoupleWithHeartManPersonNoSkinToneMediumDarkSkinTone.displayName =
  'CoupleWithHeartManPersonNoSkinToneMediumDarkSkinTone'
CoupleWithHeartManPersonNoSkinToneMediumDarkSkinTone.defaultProps = {}

export default CoupleWithHeartManPersonNoSkinToneMediumDarkSkinTone
