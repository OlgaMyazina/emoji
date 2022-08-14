import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPalmsUpTogetherMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-palms-up-together-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPalmsUpTogetherMediumDarkSkinTone.displayName =
  'EmojiPalmsUpTogetherMediumDarkSkinTone'
EmojiPalmsUpTogetherMediumDarkSkinTone.defaultProps = {}

export default EmojiPalmsUpTogetherMediumDarkSkinTone
