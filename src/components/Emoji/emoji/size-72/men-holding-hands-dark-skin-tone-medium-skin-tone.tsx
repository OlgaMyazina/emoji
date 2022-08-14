import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMenHoldingHandsDarkSkinToneMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-men-holding-hands-dark-skin-tone-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiMenHoldingHandsDarkSkinToneMediumSkinTone.displayName = 'EmojiMenHoldingHandsDarkSkinToneMediumSkinTone'
EmojiMenHoldingHandsDarkSkinToneMediumSkinTone.defaultProps = {}

export default EmojiMenHoldingHandsDarkSkinToneMediumSkinTone
