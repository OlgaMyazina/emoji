import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonPersonMediumDarkSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-person-medium-dark-skin-tone-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissPersonPersonMediumDarkSkinToneLightSkinTone.displayName =
  'EmojiKissPersonPersonMediumDarkSkinToneLightSkinTone'
EmojiKissPersonPersonMediumDarkSkinToneLightSkinTone.defaultProps = {}

export default EmojiKissPersonPersonMediumDarkSkinToneLightSkinTone
