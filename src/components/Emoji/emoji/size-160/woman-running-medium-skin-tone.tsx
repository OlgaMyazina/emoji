import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanRunningMediumSkinTone = forwardRef(
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

WomanRunningMediumSkinTone.displayName = 'WomanRunningMediumSkinTone'
WomanRunningMediumSkinTone.defaultProps = {}

export default WomanRunningMediumSkinTone
