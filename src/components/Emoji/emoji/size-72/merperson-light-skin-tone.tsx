import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MerpersonLightSkinTone = forwardRef(
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

MerpersonLightSkinTone.displayName = 'MerpersonLightSkinTone'
MerpersonLightSkinTone.defaultProps = {}

export default MerpersonLightSkinTone
