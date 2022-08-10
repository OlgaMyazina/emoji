import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManBikingLightSkinTone = forwardRef(
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

ManBikingLightSkinTone.displayName = 'ManBikingLightSkinTone'
ManBikingLightSkinTone.defaultProps = {}

export default ManBikingLightSkinTone
