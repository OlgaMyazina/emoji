import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PeopleHoldingHandsMediumLightSkinToneLightSkinTone = forwardRef(
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

PeopleHoldingHandsMediumLightSkinToneLightSkinTone.displayName =
  'PeopleHoldingHandsMediumLightSkinToneLightSkinTone'
PeopleHoldingHandsMediumLightSkinToneLightSkinTone.defaultProps = {}

export default PeopleHoldingHandsMediumLightSkinToneLightSkinTone
