import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonManMediumSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-man-medium-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonManMediumSkinToneMediumLightSkinTone.displayName =
  'EmojiKissPersonManMediumSkinToneMediumLightSkinTone'
EmojiKissPersonManMediumSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiKissPersonManMediumSkinToneMediumLightSkinTone
