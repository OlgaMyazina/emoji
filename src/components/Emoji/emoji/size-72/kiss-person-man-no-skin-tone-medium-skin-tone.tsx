import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonManNoSkinToneMediumSkinTone = forwardRef(
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

KissPersonManNoSkinToneMediumSkinTone.displayName =
  'KissPersonManNoSkinToneMediumSkinTone'
KissPersonManNoSkinToneMediumSkinTone.defaultProps = {}

export default KissPersonManNoSkinToneMediumSkinTone
