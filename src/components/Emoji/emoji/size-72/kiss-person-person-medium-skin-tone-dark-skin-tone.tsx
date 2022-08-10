import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonPersonMediumSkinToneDarkSkinTone = forwardRef(
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

KissPersonPersonMediumSkinToneDarkSkinTone.displayName =
  'KissPersonPersonMediumSkinToneDarkSkinTone'
KissPersonPersonMediumSkinToneDarkSkinTone.defaultProps = {}

export default KissPersonPersonMediumSkinToneDarkSkinTone
