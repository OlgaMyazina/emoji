import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonClimbingDarkSkinTone = forwardRef(
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

PersonClimbingDarkSkinTone.displayName = 'PersonClimbingDarkSkinTone'
PersonClimbingDarkSkinTone.defaultProps = {}

export default PersonClimbingDarkSkinTone
