import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PeopleHoldingHandsMediumSkinToneLightSkinTone = forwardRef(
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

PeopleHoldingHandsMediumSkinToneLightSkinTone.displayName =
  'PeopleHoldingHandsMediumSkinToneLightSkinTone'
PeopleHoldingHandsMediumSkinToneLightSkinTone.defaultProps = {}

export default PeopleHoldingHandsMediumSkinToneLightSkinTone
