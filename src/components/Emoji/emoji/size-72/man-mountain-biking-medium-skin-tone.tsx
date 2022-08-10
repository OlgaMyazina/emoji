import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManMountainBikingMediumSkinTone = forwardRef(
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

ManMountainBikingMediumSkinTone.displayName = 'ManMountainBikingMediumSkinTone'
ManMountainBikingMediumSkinTone.defaultProps = {}

export default ManMountainBikingMediumSkinTone
