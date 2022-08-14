import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonWomanNoSkinToneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-woman-no-skin-tone-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonWomanNoSkinToneLightSkinTone.displayName =
  'EmojiKissPersonWomanNoSkinToneLightSkinTone'
EmojiKissPersonWomanNoSkinToneLightSkinTone.defaultProps = {}

export default EmojiKissPersonWomanNoSkinToneLightSkinTone
