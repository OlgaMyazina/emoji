import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManManMediumLightSkinToneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissManManMediumLightSkinToneMediumDarkSkinTone.displayName =
  'EmojiKissManManMediumLightSkinToneMediumDarkSkinTone'
EmojiKissManManMediumLightSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissManManMediumLightSkinToneMediumDarkSkinTone
