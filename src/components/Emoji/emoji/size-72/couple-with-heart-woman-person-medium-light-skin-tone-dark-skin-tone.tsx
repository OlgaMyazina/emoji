import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanPersonMediumLightSkinToneDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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YII&#x3D;"
        />
      </figure>
    )
  }
)

CoupleWithHeartWomanPersonMediumLightSkinToneDarkSkinTone.displayName =
  'CoupleWithHeartWomanPersonMediumLightSkinToneDarkSkinTone'
CoupleWithHeartWomanPersonMediumLightSkinToneDarkSkinTone.defaultProps = {}

export default CoupleWithHeartWomanPersonMediumLightSkinToneDarkSkinTone
