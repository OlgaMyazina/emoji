import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanNoSkinToneManMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-no-skin-tone-man-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissWomanNoSkinToneManMediumLightSkinTone.displayName =
  'EmojiKissWomanNoSkinToneManMediumLightSkinTone'
EmojiKissWomanNoSkinToneManMediumLightSkinTone.defaultProps = {}

export default EmojiKissWomanNoSkinToneManMediumLightSkinTone
