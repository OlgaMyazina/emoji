import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanPersonMediumSkinToneDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-person-medium-skin-tone-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanPersonMediumSkinToneDarkSkinTone.displayName = 'EmojiCoupleWithHeartWomanPersonMediumSkinToneDarkSkinTone'
EmojiCoupleWithHeartWomanPersonMediumSkinToneDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanPersonMediumSkinToneDarkSkinTone
