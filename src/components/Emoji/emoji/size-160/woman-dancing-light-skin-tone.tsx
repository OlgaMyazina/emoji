import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanDancingLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-dancing-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiWomanDancingLightSkinTone.displayName = 'EmojiWomanDancingLightSkinTone'
EmojiWomanDancingLightSkinTone.defaultProps = {}

export default EmojiWomanDancingLightSkinTone
