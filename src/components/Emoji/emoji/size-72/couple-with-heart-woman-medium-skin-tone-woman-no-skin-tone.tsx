import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanMediumSkinToneWomanNoSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-woman-medium-skin-tone-woman-no-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartWomanMediumSkinToneWomanNoSkinTone.displayName =
  'EmojiCoupleWithHeartWomanMediumSkinToneWomanNoSkinTone'
EmojiCoupleWithHeartWomanMediumSkinToneWomanNoSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanMediumSkinToneWomanNoSkinTone
