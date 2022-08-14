import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonSwimmingMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-swimming-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiPersonSwimmingMediumSkinTone.displayName = 'EmojiPersonSwimmingMediumSkinTone'
EmojiPersonSwimmingMediumSkinTone.defaultProps = {}

export default EmojiPersonSwimmingMediumSkinTone
