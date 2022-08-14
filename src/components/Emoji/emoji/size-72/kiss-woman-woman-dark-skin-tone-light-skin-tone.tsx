import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanWomanDarkSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-woman-dark-skin-tone-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissWomanWomanDarkSkinToneLightSkinTone.displayName =
  'EmojiKissWomanWomanDarkSkinToneLightSkinTone'
EmojiKissWomanWomanDarkSkinToneLightSkinTone.defaultProps = {}

export default EmojiKissWomanWomanDarkSkinToneLightSkinTone
