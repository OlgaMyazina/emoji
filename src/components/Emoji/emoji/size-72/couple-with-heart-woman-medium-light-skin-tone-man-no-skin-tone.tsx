import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartWomanMediumLightSkinToneManNoSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-woman-medium-light-skin-tone-man-no-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartWomanMediumLightSkinToneManNoSkinTone.displayName = 'EmojiCoupleWithHeartWomanMediumLightSkinToneManNoSkinTone'
EmojiCoupleWithHeartWomanMediumLightSkinToneManNoSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartWomanMediumLightSkinToneManNoSkinTone
