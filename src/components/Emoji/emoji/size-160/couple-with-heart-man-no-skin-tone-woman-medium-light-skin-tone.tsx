import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartManNoSkinToneWomanMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-man-no-skin-tone-woman-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartManNoSkinToneWomanMediumLightSkinTone.displayName =
  'EmojiCoupleWithHeartManNoSkinToneWomanMediumLightSkinTone'
EmojiCoupleWithHeartManNoSkinToneWomanMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManNoSkinToneWomanMediumLightSkinTone
