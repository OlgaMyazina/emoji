import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanPersonLightSkinToneDarkSkinTone = forwardRef(
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

KissWomanPersonLightSkinToneDarkSkinTone.displayName =
  'KissWomanPersonLightSkinToneDarkSkinTone'
KissWomanPersonLightSkinToneDarkSkinTone.defaultProps = {}

export default KissWomanPersonLightSkinToneDarkSkinTone
