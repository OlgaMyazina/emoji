import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanNoSkinToneWomanLightSkinTone = forwardRef(
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

CoupleWithHeartWomanNoSkinToneWomanLightSkinTone.displayName =
  'CoupleWithHeartWomanNoSkinToneWomanLightSkinTone'
CoupleWithHeartWomanNoSkinToneWomanLightSkinTone.defaultProps = {}

export default CoupleWithHeartWomanNoSkinToneWomanLightSkinTone
