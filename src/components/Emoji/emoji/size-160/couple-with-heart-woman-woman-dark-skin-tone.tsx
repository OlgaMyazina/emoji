import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanWomanDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-woman-woman-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartWomanWomanDarkSkinTone.displayName =
  'EmojiCoupleWithHeartWomanWomanDarkSkinTone'
EmojiCoupleWithHeartWomanWomanDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanWomanDarkSkinTone
