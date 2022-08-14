import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMenHoldingHandsLightSkinToneDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-men-holding-hands-light-skin-tone-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiMenHoldingHandsLightSkinToneDarkSkinTone.displayName =
  'EmojiMenHoldingHandsLightSkinToneDarkSkinTone'
EmojiMenHoldingHandsLightSkinToneDarkSkinTone.defaultProps = {}

export default EmojiMenHoldingHandsLightSkinToneDarkSkinTone
