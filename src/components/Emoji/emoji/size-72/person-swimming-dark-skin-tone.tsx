import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonSwimmingDarkSkinTone = forwardRef(
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

PersonSwimmingDarkSkinTone.displayName = 'PersonSwimmingDarkSkinTone'
PersonSwimmingDarkSkinTone.defaultProps = {}

export default PersonSwimmingDarkSkinTone
