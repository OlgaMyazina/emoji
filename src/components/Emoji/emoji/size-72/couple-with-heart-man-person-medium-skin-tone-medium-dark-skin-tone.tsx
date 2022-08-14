import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManPersonMediumSkinToneMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-person-medium-skin-tone-medium-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManPersonMediumSkinToneMediumDarkSkinTone.displayName = 'EmojiCoupleWithHeartManPersonMediumSkinToneMediumDarkSkinTone'
EmojiCoupleWithHeartManPersonMediumSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManPersonMediumSkinToneMediumDarkSkinTone
