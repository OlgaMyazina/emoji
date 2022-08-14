import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanPersonMediumSkinToneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-person-medium-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissWomanPersonMediumSkinToneMediumDarkSkinTone.displayName =
  'EmojiKissWomanPersonMediumSkinToneMediumDarkSkinTone'
EmojiKissWomanPersonMediumSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissWomanPersonMediumSkinToneMediumDarkSkinTone
