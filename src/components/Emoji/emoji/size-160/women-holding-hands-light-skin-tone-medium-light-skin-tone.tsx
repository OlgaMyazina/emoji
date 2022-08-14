import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomenHoldingHandsLightSkinToneMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-women-holding-hands-light-skin-tone-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiWomenHoldingHandsLightSkinToneMediumLightSkinTone.displayName = 'EmojiWomenHoldingHandsLightSkinToneMediumLightSkinTone'
EmojiWomenHoldingHandsLightSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiWomenHoldingHandsLightSkinToneMediumLightSkinTone
