import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanPersonMediumSkinToneLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-person-medium-skin-tone-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanPersonMediumSkinToneLightSkinTone.displayName = 'EmojiCoupleWithHeartWomanPersonMediumSkinToneLightSkinTone'
EmojiCoupleWithHeartWomanPersonMediumSkinToneLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanPersonMediumSkinToneLightSkinTone
