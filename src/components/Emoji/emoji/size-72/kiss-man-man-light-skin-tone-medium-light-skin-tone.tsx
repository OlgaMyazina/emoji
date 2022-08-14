import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManManLightSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-man-light-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissManManLightSkinToneMediumLightSkinTone.displayName =
  'EmojiKissManManLightSkinToneMediumLightSkinTone'
EmojiKissManManLightSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiKissManManLightSkinToneMediumLightSkinTone
