import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartManMediumDarkSkinToneWomanLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-man-medium-dark-skin-tone-woman-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartManMediumDarkSkinToneWomanLightSkinTone.displayName =
  'EmojiCoupleWithHeartManMediumDarkSkinToneWomanLightSkinTone'
EmojiCoupleWithHeartManMediumDarkSkinToneWomanLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManMediumDarkSkinToneWomanLightSkinTone
