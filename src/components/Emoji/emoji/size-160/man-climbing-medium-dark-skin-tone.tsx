import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManClimbingMediumDarkSkinTone = forwardRef(
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

ManClimbingMediumDarkSkinTone.displayName = 'ManClimbingMediumDarkSkinTone'
ManClimbingMediumDarkSkinTone.defaultProps = {}

export default ManClimbingMediumDarkSkinTone
