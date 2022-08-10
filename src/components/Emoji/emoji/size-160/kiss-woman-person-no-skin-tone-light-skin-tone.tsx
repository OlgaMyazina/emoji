import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissWomanPersonNoSkinToneLightSkinTone = forwardRef(
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

KissWomanPersonNoSkinToneLightSkinTone.displayName =
  'KissWomanPersonNoSkinToneLightSkinTone'
KissWomanPersonNoSkinToneLightSkinTone.defaultProps = {}

export default KissWomanPersonNoSkinToneLightSkinTone
