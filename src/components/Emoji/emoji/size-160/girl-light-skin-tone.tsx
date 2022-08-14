import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiGirlLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-girl-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiGirlLightSkinTone.displayName = 'EmojiGirlLightSkinTone'
EmojiGirlLightSkinTone.defaultProps = {}

export default EmojiGirlLightSkinTone
