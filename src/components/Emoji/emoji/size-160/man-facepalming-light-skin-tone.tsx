import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManFacepalmingLightSkinTone = forwardRef(
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

ManFacepalmingLightSkinTone.displayName = 'ManFacepalmingLightSkinTone'
ManFacepalmingLightSkinTone.defaultProps = {}

export default ManFacepalmingLightSkinTone
