import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonWomanDarkSkinToneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-woman-dark-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonWomanDarkSkinToneMediumDarkSkinTone.displayName =
  'EmojiKissPersonWomanDarkSkinToneMediumDarkSkinTone'
EmojiKissPersonWomanDarkSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissPersonWomanDarkSkinToneMediumDarkSkinTone
