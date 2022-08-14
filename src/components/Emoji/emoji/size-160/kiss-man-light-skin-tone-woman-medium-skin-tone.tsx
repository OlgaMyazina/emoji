import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManLightSkinToneWomanMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-light-skin-tone-woman-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissManLightSkinToneWomanMediumSkinTone.displayName =
  'EmojiKissManLightSkinToneWomanMediumSkinTone'
EmojiKissManLightSkinToneWomanMediumSkinTone.defaultProps = {}

export default EmojiKissManLightSkinToneWomanMediumSkinTone
