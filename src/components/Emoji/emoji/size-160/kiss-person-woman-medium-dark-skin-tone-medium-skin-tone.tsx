import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonWomanMediumDarkSkinToneMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-woman-medium-dark-skin-tone-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonWomanMediumDarkSkinToneMediumSkinTone.displayName =
  'EmojiKissPersonWomanMediumDarkSkinToneMediumSkinTone'
EmojiKissPersonWomanMediumDarkSkinToneMediumSkinTone.defaultProps = {}

export default EmojiKissPersonWomanMediumDarkSkinToneMediumSkinTone
