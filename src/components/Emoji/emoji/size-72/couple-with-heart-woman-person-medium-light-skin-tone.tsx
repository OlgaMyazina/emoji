import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanPersonMediumLightSkinTone = forwardRef(
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

CoupleWithHeartWomanPersonMediumLightSkinTone.displayName =
  'CoupleWithHeartWomanPersonMediumLightSkinTone'
CoupleWithHeartWomanPersonMediumLightSkinTone.defaultProps = {}

export default CoupleWithHeartWomanPersonMediumLightSkinTone
