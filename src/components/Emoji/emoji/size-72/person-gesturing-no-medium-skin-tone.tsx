import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonGesturingNoMediumSkinTone = forwardRef(
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

PersonGesturingNoMediumSkinTone.displayName = 'PersonGesturingNoMediumSkinTone'
PersonGesturingNoMediumSkinTone.defaultProps = {}

export default PersonGesturingNoMediumSkinTone
