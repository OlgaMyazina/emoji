import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanPersonLightSkinToneMediumLightSkinTone = forwardRef(
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

KissWomanPersonLightSkinToneMediumLightSkinTone.displayName =
  'KissWomanPersonLightSkinToneMediumLightSkinTone'
KissWomanPersonLightSkinToneMediumLightSkinTone.defaultProps = {}

export default KissWomanPersonLightSkinToneMediumLightSkinTone
