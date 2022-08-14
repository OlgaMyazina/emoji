import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSupervillainMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-supervillain-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSupervillainMediumSkinTone.displayName = 'EmojiSupervillainMediumSkinTone'
EmojiSupervillainMediumSkinTone.defaultProps = {}

export default EmojiSupervillainMediumSkinTone
