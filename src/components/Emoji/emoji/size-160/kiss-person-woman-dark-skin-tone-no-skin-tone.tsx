import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonWomanDarkSkinToneNoSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-woman-dark-skin-tone-no-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonWomanDarkSkinToneNoSkinTone.displayName =
  'EmojiKissPersonWomanDarkSkinToneNoSkinTone'
EmojiKissPersonWomanDarkSkinToneNoSkinTone.defaultProps = {}

export default EmojiKissPersonWomanDarkSkinToneNoSkinTone
