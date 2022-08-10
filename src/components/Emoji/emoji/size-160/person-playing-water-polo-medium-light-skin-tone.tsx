import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonPlayingWaterPoloMediumLightSkinTone = forwardRef(
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

PersonPlayingWaterPoloMediumLightSkinTone.displayName =
  'PersonPlayingWaterPoloMediumLightSkinTone'
PersonPlayingWaterPoloMediumLightSkinTone.defaultProps = {}

export default PersonPlayingWaterPoloMediumLightSkinTone
