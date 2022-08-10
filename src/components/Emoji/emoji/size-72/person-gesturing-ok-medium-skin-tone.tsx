import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonGesturingOkMediumSkinTone = forwardRef(
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

PersonGesturingOkMediumSkinTone.displayName = 'PersonGesturingOkMediumSkinTone'
PersonGesturingOkMediumSkinTone.defaultProps = {}

export default PersonGesturingOkMediumSkinTone
