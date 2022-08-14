import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManDarkSkinToneWomanNoSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-dark-skin-tone-woman-no-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManDarkSkinToneWomanNoSkinTone.displayName = 'EmojiCoupleWithHeartManDarkSkinToneWomanNoSkinTone'
EmojiCoupleWithHeartManDarkSkinToneWomanNoSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManDarkSkinToneWomanNoSkinTone
