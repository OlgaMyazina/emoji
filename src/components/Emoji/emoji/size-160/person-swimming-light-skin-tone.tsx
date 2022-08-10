import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonSwimmingLightSkinTone = forwardRef(
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

PersonSwimmingLightSkinTone.displayName = 'PersonSwimmingLightSkinTone'
PersonSwimmingLightSkinTone.defaultProps = {}

export default PersonSwimmingLightSkinTone
