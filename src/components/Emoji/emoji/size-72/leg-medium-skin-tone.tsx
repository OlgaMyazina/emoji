import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LegMediumSkinTone = forwardRef(
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

LegMediumSkinTone.displayName = 'LegMediumSkinTone'
LegMediumSkinTone.defaultProps = {}

export default LegMediumSkinTone
