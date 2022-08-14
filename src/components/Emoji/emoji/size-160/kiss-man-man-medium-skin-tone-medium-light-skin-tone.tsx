import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManManMediumSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-man-medium-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissManManMediumSkinToneMediumLightSkinTone.displayName =
  'EmojiKissManManMediumSkinToneMediumLightSkinTone'
EmojiKissManManMediumSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiKissManManMediumSkinToneMediumLightSkinTone
