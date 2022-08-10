import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonSurfingMediumSkinTone = forwardRef(
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

PersonSurfingMediumSkinTone.displayName = 'PersonSurfingMediumSkinTone'
PersonSurfingMediumSkinTone.defaultProps = {}

export default PersonSurfingMediumSkinTone
