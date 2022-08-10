import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManPlayingHandballMediumSkinTone = forwardRef(
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

ManPlayingHandballMediumSkinTone.displayName =
  'ManPlayingHandballMediumSkinTone'
ManPlayingHandballMediumSkinTone.defaultProps = {}

export default ManPlayingHandballMediumSkinTone
