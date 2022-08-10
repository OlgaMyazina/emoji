import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanVampireMediumSkinTone = forwardRef(
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

WomanVampireMediumSkinTone.displayName = 'WomanVampireMediumSkinTone'
WomanVampireMediumSkinTone.defaultProps = {}

export default WomanVampireMediumSkinTone
