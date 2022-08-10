import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartManLightSkinToneWomanDarkSkinTone = forwardRef(
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

CoupleWithHeartManLightSkinToneWomanDarkSkinTone.displayName =
  'CoupleWithHeartManLightSkinToneWomanDarkSkinTone'
CoupleWithHeartManLightSkinToneWomanDarkSkinTone.defaultProps = {}

export default CoupleWithHeartManLightSkinToneWomanDarkSkinTone
