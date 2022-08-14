import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanPersonNoSkinToneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-person-no-skin-tone-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissWomanPersonNoSkinToneMediumLightSkinTone.displayName =
  'EmojiKissWomanPersonNoSkinToneMediumLightSkinTone'
EmojiKissWomanPersonNoSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiKissWomanPersonNoSkinToneMediumLightSkinTone
