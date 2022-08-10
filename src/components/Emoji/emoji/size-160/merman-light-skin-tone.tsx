import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MermanLightSkinTone = forwardRef(
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

MermanLightSkinTone.displayName = 'MermanLightSkinTone'
MermanLightSkinTone.defaultProps = {}

export default MermanLightSkinTone
