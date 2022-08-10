import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManMountainBikingLightSkinTone = forwardRef(
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

ManMountainBikingLightSkinTone.displayName = 'ManMountainBikingLightSkinTone'
ManMountainBikingLightSkinTone.defaultProps = {}

export default ManMountainBikingLightSkinTone
