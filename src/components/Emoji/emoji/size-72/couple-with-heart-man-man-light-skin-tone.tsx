import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartManManLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-man-man-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartManManLightSkinTone.displayName = 'EmojiCoupleWithHeartManManLightSkinTone'
EmojiCoupleWithHeartManManLightSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartManManLightSkinTone
