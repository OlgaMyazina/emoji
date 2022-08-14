import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonPersonDarkSkinToneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-person-dark-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonPersonDarkSkinToneMediumDarkSkinTone.displayName =
  'EmojiKissPersonPersonDarkSkinToneMediumDarkSkinTone'
EmojiKissPersonPersonDarkSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissPersonPersonDarkSkinToneMediumDarkSkinTone
