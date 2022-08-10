import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonPersonMediumSkinToneMediumLightSkinTone = forwardRef(
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

KissPersonPersonMediumSkinToneMediumLightSkinTone.displayName =
  'KissPersonPersonMediumSkinToneMediumLightSkinTone'
KissPersonPersonMediumSkinToneMediumLightSkinTone.defaultProps = {}

export default KissPersonPersonMediumSkinToneMediumLightSkinTone
