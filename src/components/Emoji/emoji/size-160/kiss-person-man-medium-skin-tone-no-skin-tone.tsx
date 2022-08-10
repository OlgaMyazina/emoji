import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonManMediumSkinToneNoSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

KissPersonManMediumSkinToneNoSkinTone.displayName =
  'KissPersonManMediumSkinToneNoSkinTone'
KissPersonManMediumSkinToneNoSkinTone.defaultProps = {}

export default KissPersonManMediumSkinToneNoSkinTone
