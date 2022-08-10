import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManDancingMediumLightSkinTone = forwardRef(
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

ManDancingMediumLightSkinTone.displayName = 'ManDancingMediumLightSkinTone'
ManDancingMediumLightSkinTone.defaultProps = {}

export default ManDancingMediumLightSkinTone
