import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManCookLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-cook-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManCookLightSkinTone.displayName = 'EmojiManCookLightSkinTone'
EmojiManCookLightSkinTone.defaultProps = {}

export default EmojiManCookLightSkinTone
