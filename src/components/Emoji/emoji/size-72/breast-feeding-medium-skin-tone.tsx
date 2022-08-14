import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiBreastFeedingMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-breast-feeding-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiBreastFeedingMediumSkinTone.displayName = 'EmojiBreastFeedingMediumSkinTone'
EmojiBreastFeedingMediumSkinTone.defaultProps = {}

export default EmojiBreastFeedingMediumSkinTone
