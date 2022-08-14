import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonManMediumDarkSkinToneMediumLightSkinTone =
  forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-man-medium-dark-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  })

EmojiCoupleWithHeartPersonManMediumDarkSkinToneMediumLightSkinTone.displayName =
  'EmojiCoupleWithHeartPersonManMediumDarkSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartPersonManMediumDarkSkinToneMediumLightSkinTone.defaultProps =
  {}

export default EmojiCoupleWithHeartPersonManMediumDarkSkinToneMediumLightSkinTone
