import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanPersonMediumDarkSkinToneDarkSkinTone = forwardRef(
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

KissWomanPersonMediumDarkSkinToneDarkSkinTone.displayName =
  'KissWomanPersonMediumDarkSkinToneDarkSkinTone'
KissWomanPersonMediumDarkSkinToneDarkSkinTone.defaultProps = {}

export default KissWomanPersonMediumDarkSkinToneDarkSkinTone
