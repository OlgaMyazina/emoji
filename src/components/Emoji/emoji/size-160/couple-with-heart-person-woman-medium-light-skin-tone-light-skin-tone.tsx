import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonWomanMediumLightSkinToneLightSkinTone =
  forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-woman-medium-light-skin-tone-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  })

EmojiCoupleWithHeartPersonWomanMediumLightSkinToneLightSkinTone.displayName =
  'EmojiCoupleWithHeartPersonWomanMediumLightSkinToneLightSkinTone'
EmojiCoupleWithHeartPersonWomanMediumLightSkinToneLightSkinTone.defaultProps =
  {}

export default EmojiCoupleWithHeartPersonWomanMediumLightSkinToneLightSkinTone
