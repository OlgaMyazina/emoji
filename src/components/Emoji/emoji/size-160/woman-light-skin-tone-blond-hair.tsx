import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanLightSkinToneBlondHair = forwardRef(
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

WomanLightSkinToneBlondHair.displayName = 'WomanLightSkinToneBlondHair'
WomanLightSkinToneBlondHair.defaultProps = {}

export default WomanLightSkinToneBlondHair
