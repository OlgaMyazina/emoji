import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonLightSkinTone = forwardRef(
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

PersonLightSkinTone.displayName = 'PersonLightSkinTone'
PersonLightSkinTone.defaultProps = {}

export default PersonLightSkinTone
