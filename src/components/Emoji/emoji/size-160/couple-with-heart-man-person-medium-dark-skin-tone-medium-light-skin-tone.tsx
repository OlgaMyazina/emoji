import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartManPersonMediumDarkSkinToneMediumLightSkinTone =
  forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-man-person-medium-dark-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  })

EmojiCoupleWithHeartManPersonMediumDarkSkinToneMediumLightSkinTone.displayName =
  'EmojiCoupleWithHeartManPersonMediumDarkSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartManPersonMediumDarkSkinToneMediumLightSkinTone.defaultProps =
  {}

export default EmojiCoupleWithHeartManPersonMediumDarkSkinToneMediumLightSkinTone
