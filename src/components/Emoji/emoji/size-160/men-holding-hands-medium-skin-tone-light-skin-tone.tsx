import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MenHoldingHandsMediumSkinToneLightSkinTone = forwardRef(
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

MenHoldingHandsMediumSkinToneLightSkinTone.displayName =
  'MenHoldingHandsMediumSkinToneLightSkinTone'
MenHoldingHandsMediumSkinToneLightSkinTone.defaultProps = {}

export default MenHoldingHandsMediumSkinToneLightSkinTone
