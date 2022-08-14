import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonWomanMediumDarkSkinToneDarkSkinTone =
  forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-woman-medium-dark-skin-tone-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  })

EmojiCoupleWithHeartPersonWomanMediumDarkSkinToneDarkSkinTone.displayName =
  'EmojiCoupleWithHeartPersonWomanMediumDarkSkinToneDarkSkinTone'
EmojiCoupleWithHeartPersonWomanMediumDarkSkinToneDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartPersonWomanMediumDarkSkinToneDarkSkinTone
