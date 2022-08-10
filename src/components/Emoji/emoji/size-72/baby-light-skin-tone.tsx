import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BabyLightSkinTone = forwardRef(
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

BabyLightSkinTone.displayName = 'BabyLightSkinTone'
BabyLightSkinTone.defaultProps = {}

export default BabyLightSkinTone
