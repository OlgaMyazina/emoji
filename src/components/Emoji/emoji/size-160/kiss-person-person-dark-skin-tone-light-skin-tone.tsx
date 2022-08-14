import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonPersonDarkSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-person-dark-skin-tone-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissPersonPersonDarkSkinToneLightSkinTone.displayName =
  'EmojiKissPersonPersonDarkSkinToneLightSkinTone'
EmojiKissPersonPersonDarkSkinToneLightSkinTone.defaultProps = {}

export default EmojiKissPersonPersonDarkSkinToneLightSkinTone
