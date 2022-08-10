import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartManManDarkSkinToneMediumDarkSkinTone = forwardRef(
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

CoupleWithHeartManManDarkSkinToneMediumDarkSkinTone.displayName =
  'CoupleWithHeartManManDarkSkinToneMediumDarkSkinTone'
CoupleWithHeartManManDarkSkinToneMediumDarkSkinTone.defaultProps = {}

export default CoupleWithHeartManManDarkSkinToneMediumDarkSkinTone
