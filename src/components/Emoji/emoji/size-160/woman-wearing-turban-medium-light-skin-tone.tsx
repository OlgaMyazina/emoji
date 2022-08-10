import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanWearingTurbanMediumLightSkinTone = forwardRef(
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

WomanWearingTurbanMediumLightSkinTone.displayName =
  'WomanWearingTurbanMediumLightSkinTone'
WomanWearingTurbanMediumLightSkinTone.defaultProps = {}

export default WomanWearingTurbanMediumLightSkinTone
