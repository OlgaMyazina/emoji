import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanNoSkinToneWomanMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-woman-no-skin-tone-woman-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartWomanNoSkinToneWomanMediumLightSkinTone.displayName =
  'EmojiCoupleWithHeartWomanNoSkinToneWomanMediumLightSkinTone'
EmojiCoupleWithHeartWomanNoSkinToneWomanMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanNoSkinToneWomanMediumLightSkinTone
