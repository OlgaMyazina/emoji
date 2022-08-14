import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanNoSkinToneManLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-no-skin-tone-man-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanNoSkinToneManLightSkinTone.displayName = 'EmojiCoupleWithHeartWomanNoSkinToneManLightSkinTone'
EmojiCoupleWithHeartWomanNoSkinToneManLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanNoSkinToneManLightSkinTone
