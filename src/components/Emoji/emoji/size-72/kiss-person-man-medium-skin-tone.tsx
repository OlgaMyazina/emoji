import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonManMediumSkinTone = forwardRef(
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

KissPersonManMediumSkinTone.displayName = 'KissPersonManMediumSkinTone'
KissPersonManMediumSkinTone.defaultProps = {}

export default KissPersonManMediumSkinTone
