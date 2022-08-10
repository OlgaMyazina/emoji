import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanWalkingLightSkinTone = forwardRef(
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

WomanWalkingLightSkinTone.displayName = 'WomanWalkingLightSkinTone'
WomanWalkingLightSkinTone.defaultProps = {}

export default WomanWalkingLightSkinTone
