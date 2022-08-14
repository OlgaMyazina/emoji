import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonManLightSkinToneDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-person-man-light-skin-tone-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartPersonManLightSkinToneDarkSkinTone.displayName = 'EmojiCoupleWithHeartPersonManLightSkinToneDarkSkinTone'
EmojiCoupleWithHeartPersonManLightSkinToneDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartPersonManLightSkinToneDarkSkinTone
