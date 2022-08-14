import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomenHoldingHandsMediumDarkSkinToneMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWomenHoldingHandsMediumDarkSkinToneMediumLightSkinTone.displayName = 'EmojiWomenHoldingHandsMediumDarkSkinToneMediumLightSkinTone'
EmojiWomenHoldingHandsMediumDarkSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiWomenHoldingHandsMediumDarkSkinToneMediumLightSkinTone
