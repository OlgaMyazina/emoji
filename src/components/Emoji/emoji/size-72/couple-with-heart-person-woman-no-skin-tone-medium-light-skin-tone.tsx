import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonWomanNoSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-woman-no-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartPersonWomanNoSkinToneMediumLightSkinTone.displayName =
  'EmojiCoupleWithHeartPersonWomanNoSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartPersonWomanNoSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartPersonWomanNoSkinToneMediumLightSkinTone
