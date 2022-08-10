import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonWomanDarkSkinToneLightSkinTone = forwardRef(
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

KissPersonWomanDarkSkinToneLightSkinTone.displayName =
  'KissPersonWomanDarkSkinToneLightSkinTone'
KissPersonWomanDarkSkinToneLightSkinTone.defaultProps = {}

export default KissPersonWomanDarkSkinToneLightSkinTone
