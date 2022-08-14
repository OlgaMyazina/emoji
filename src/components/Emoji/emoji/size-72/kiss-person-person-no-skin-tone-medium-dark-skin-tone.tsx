import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissPersonPersonNoSkinToneMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-person-person-no-skin-tone-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissPersonPersonNoSkinToneMediumDarkSkinTone.displayName =
  'EmojiKissPersonPersonNoSkinToneMediumDarkSkinTone'
EmojiKissPersonPersonNoSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissPersonPersonNoSkinToneMediumDarkSkinTone
