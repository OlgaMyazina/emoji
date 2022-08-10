import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonSurfingLightSkinTone = forwardRef(
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

PersonSurfingLightSkinTone.displayName = 'PersonSurfingLightSkinTone'
PersonSurfingLightSkinTone.defaultProps = {}

export default PersonSurfingLightSkinTone
