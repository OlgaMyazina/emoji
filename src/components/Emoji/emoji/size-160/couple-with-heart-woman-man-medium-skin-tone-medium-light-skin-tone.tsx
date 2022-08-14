import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanManMediumSkinToneMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanManMediumSkinToneMediumLightSkinTone.displayName = 'EmojiCoupleWithHeartWomanManMediumSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartWomanManMediumSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanManMediumSkinToneMediumLightSkinTone
