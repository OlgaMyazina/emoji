import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartManPersonDarkSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-man-person-dark-skin-tone-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartManPersonDarkSkinToneLightSkinTone.displayName =
  'EmojiCoupleWithHeartManPersonDarkSkinToneLightSkinTone'
EmojiCoupleWithHeartManPersonDarkSkinToneLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManPersonDarkSkinToneLightSkinTone
