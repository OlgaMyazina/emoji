import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManMediumSkinToneManNoSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-medium-skin-tone-man-no-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissManMediumSkinToneManNoSkinTone.displayName =
  'EmojiKissManMediumSkinToneManNoSkinTone'
EmojiKissManMediumSkinToneManNoSkinTone.defaultProps = {}

export default EmojiKissManMediumSkinToneManNoSkinTone