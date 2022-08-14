import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanWomanDarkSkinToneLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanWomanDarkSkinToneLightSkinTone.displayName = 'EmojiCoupleWithHeartWomanWomanDarkSkinToneLightSkinTone'
EmojiCoupleWithHeartWomanWomanDarkSkinToneLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanWomanDarkSkinToneLightSkinTone
