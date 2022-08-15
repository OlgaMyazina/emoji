import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManNoSkinToneWomanMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-no-skin-tone-woman-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissManNoSkinToneWomanMediumDarkSkinTone.displayName =
  'EmojiKissManNoSkinToneWomanMediumDarkSkinTone'
EmojiKissManNoSkinToneWomanMediumDarkSkinTone.defaultProps = {}

export default EmojiKissManNoSkinToneWomanMediumDarkSkinTone