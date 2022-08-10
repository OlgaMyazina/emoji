import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanMechanicMediumSkinTone = forwardRef(
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

WomanMechanicMediumSkinTone.displayName = 'WomanMechanicMediumSkinTone'
WomanMechanicMediumSkinTone.defaultProps = {}

export default WomanMechanicMediumSkinTone
