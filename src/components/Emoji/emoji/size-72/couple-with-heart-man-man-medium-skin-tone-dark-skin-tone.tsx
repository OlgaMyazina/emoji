import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManManMediumSkinToneDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-man-medium-skin-tone-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManManMediumSkinToneDarkSkinTone.displayName = 'EmojiCoupleWithHeartManManMediumSkinToneDarkSkinTone'
EmojiCoupleWithHeartManManMediumSkinToneDarkSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManManMediumSkinToneDarkSkinTone
