import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanPoutingMediumSkinTone = forwardRef(
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

WomanPoutingMediumSkinTone.displayName = 'WomanPoutingMediumSkinTone'
WomanPoutingMediumSkinTone.defaultProps = {}

export default WomanPoutingMediumSkinTone
