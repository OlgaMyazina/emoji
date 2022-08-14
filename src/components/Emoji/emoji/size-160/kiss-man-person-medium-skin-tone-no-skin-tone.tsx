import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManPersonMediumSkinToneNoSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-person-medium-skin-tone-no-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissManPersonMediumSkinToneNoSkinTone.displayName =
  'EmojiKissManPersonMediumSkinToneNoSkinTone'
EmojiKissManPersonMediumSkinToneNoSkinTone.defaultProps = {}

export default EmojiKissManPersonMediumSkinToneNoSkinTone
