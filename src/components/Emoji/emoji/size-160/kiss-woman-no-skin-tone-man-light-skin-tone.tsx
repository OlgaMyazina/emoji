import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanNoSkinToneManLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-no-skin-tone-man-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissWomanNoSkinToneManLightSkinTone.displayName =
  'EmojiKissWomanNoSkinToneManLightSkinTone'
EmojiKissWomanNoSkinToneManLightSkinTone.defaultProps = {}

export default EmojiKissWomanNoSkinToneManLightSkinTone
