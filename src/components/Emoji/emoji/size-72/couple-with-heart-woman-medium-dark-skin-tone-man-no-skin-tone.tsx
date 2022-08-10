import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanMediumDarkSkinToneManNoSkinTone = forwardRef(
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

CoupleWithHeartWomanMediumDarkSkinToneManNoSkinTone.displayName =
  'CoupleWithHeartWomanMediumDarkSkinToneManNoSkinTone'
CoupleWithHeartWomanMediumDarkSkinToneManNoSkinTone.defaultProps = {}

export default CoupleWithHeartWomanMediumDarkSkinToneManNoSkinTone
