import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanManMediumSkinToneDarkSkinTone = forwardRef(
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

KissWomanManMediumSkinToneDarkSkinTone.displayName =
  'KissWomanManMediumSkinToneDarkSkinTone'
KissWomanManMediumSkinToneDarkSkinTone.defaultProps = {}

export default KissWomanManMediumSkinToneDarkSkinTone
