import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissManMediumSkinToneWomanNoSkinTone = forwardRef(
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

KissManMediumSkinToneWomanNoSkinTone.displayName =
  'KissManMediumSkinToneWomanNoSkinTone'
KissManMediumSkinToneWomanNoSkinTone.defaultProps = {}

export default KissManMediumSkinToneWomanNoSkinTone
