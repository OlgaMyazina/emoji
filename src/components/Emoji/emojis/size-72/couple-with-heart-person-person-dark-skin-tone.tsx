import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonPersonDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-person-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartPersonPersonDarkSkinTone.displayName =
  'EmojiCoupleWithHeartPersonPersonDarkSkinTone'
EmojiCoupleWithHeartPersonPersonDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartPersonPersonDarkSkinTone