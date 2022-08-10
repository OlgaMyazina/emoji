import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanAndManHoldingHandsDarkSkinToneLightSkinTone = forwardRef(
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

WomanAndManHoldingHandsDarkSkinToneLightSkinTone.displayName =
  'WomanAndManHoldingHandsDarkSkinToneLightSkinTone'
WomanAndManHoldingHandsDarkSkinToneLightSkinTone.defaultProps = {}

export default WomanAndManHoldingHandsDarkSkinToneLightSkinTone
