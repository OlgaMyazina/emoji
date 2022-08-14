import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonWomanMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-couple-with-heart-person-woman-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCoupleWithHeartPersonWomanMediumSkinTone.displayName = 'EmojiCoupleWithHeartPersonWomanMediumSkinTone'
EmojiCoupleWithHeartPersonWomanMediumSkinTone.defaultProps = {}

export default EmojiCoupleWithHeartPersonWomanMediumSkinTone
