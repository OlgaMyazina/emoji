import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonGolfingMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-golfing-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiPersonGolfingMediumSkinTone.displayName = 'EmojiPersonGolfingMediumSkinTone'
EmojiPersonGolfingMediumSkinTone.defaultProps = {}

export default EmojiPersonGolfingMediumSkinTone
