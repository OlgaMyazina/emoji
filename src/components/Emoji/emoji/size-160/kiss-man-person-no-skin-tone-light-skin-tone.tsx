import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissManPersonNoSkinToneLightSkinTone = forwardRef(
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

KissManPersonNoSkinToneLightSkinTone.displayName =
  'KissManPersonNoSkinToneLightSkinTone'
KissManPersonNoSkinToneLightSkinTone.defaultProps = {}

export default KissManPersonNoSkinToneLightSkinTone
