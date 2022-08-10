import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonPoutingMediumSkinTone = forwardRef(
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

PersonPoutingMediumSkinTone.displayName = 'PersonPoutingMediumSkinTone'
PersonPoutingMediumSkinTone.defaultProps = {}

export default PersonPoutingMediumSkinTone
