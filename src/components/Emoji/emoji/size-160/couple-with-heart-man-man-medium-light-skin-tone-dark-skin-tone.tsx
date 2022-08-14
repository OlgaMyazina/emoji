import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManManMediumLightSkinToneDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManManMediumLightSkinToneDarkSkinTone.displayName = 'EmojiCoupleWithHeartManManMediumLightSkinToneDarkSkinTone'
EmojiCoupleWithHeartManManMediumLightSkinToneDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManManMediumLightSkinToneDarkSkinTone
