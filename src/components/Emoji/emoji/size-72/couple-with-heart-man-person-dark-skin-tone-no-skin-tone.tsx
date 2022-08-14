import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManPersonDarkSkinToneNoSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-person-dark-skin-tone-no-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManPersonDarkSkinToneNoSkinTone.displayName = 'EmojiCoupleWithHeartManPersonDarkSkinToneNoSkinTone'
EmojiCoupleWithHeartManPersonDarkSkinToneNoSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManPersonDarkSkinToneNoSkinTone
