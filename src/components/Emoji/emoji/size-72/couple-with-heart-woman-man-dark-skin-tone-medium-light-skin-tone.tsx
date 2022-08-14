import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanManDarkSkinToneMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanManDarkSkinToneMediumLightSkinTone.displayName = 'EmojiCoupleWithHeartWomanManDarkSkinToneMediumLightSkinTone'
EmojiCoupleWithHeartWomanManDarkSkinToneMediumLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanManDarkSkinToneMediumLightSkinTone
