import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanWomanMediumLightSkinToneMediumSkinTone = forwardRef(
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

KissWomanWomanMediumLightSkinToneMediumSkinTone.displayName =
  'KissWomanWomanMediumLightSkinToneMediumSkinTone'
KissWomanWomanMediumLightSkinToneMediumSkinTone.defaultProps = {}

export default KissWomanWomanMediumLightSkinToneMediumSkinTone
