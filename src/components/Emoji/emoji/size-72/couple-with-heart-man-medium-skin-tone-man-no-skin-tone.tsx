import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManMediumSkinToneManNoSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-medium-skin-tone-man-no-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManMediumSkinToneManNoSkinTone.displayName = 'EmojiCoupleWithHeartManMediumSkinToneManNoSkinTone'
EmojiCoupleWithHeartManMediumSkinToneManNoSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManMediumSkinToneManNoSkinTone
