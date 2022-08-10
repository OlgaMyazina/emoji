import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartPersonManLightSkinToneNoSkinTone = forwardRef(
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

CoupleWithHeartPersonManLightSkinToneNoSkinTone.displayName =
  'CoupleWithHeartPersonManLightSkinToneNoSkinTone'
CoupleWithHeartPersonManLightSkinToneNoSkinTone.defaultProps = {}

export default CoupleWithHeartPersonManLightSkinToneNoSkinTone
