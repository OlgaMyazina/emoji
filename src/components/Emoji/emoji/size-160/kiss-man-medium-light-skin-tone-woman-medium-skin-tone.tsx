import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManMediumLightSkinToneWomanMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-medium-light-skin-tone-woman-medium-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissManMediumLightSkinToneWomanMediumSkinTone.displayName =
  'EmojiKissManMediumLightSkinToneWomanMediumSkinTone'
EmojiKissManMediumLightSkinToneWomanMediumSkinTone.defaultProps = {}

export default EmojiKissManMediumLightSkinToneWomanMediumSkinTone
