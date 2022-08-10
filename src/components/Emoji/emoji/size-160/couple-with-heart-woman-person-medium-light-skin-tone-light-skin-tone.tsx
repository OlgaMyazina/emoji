import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanPersonMediumLightSkinToneLightSkinTone = forwardRef(
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

CoupleWithHeartWomanPersonMediumLightSkinToneLightSkinTone.displayName =
  'CoupleWithHeartWomanPersonMediumLightSkinToneLightSkinTone'
CoupleWithHeartWomanPersonMediumLightSkinToneLightSkinTone.defaultProps = {}

export default CoupleWithHeartWomanPersonMediumLightSkinToneLightSkinTone
