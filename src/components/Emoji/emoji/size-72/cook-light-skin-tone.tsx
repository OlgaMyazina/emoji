import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCookLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-cook-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCookLightSkinTone.displayName = 'EmojiCookLightSkinTone'
EmojiCookLightSkinTone.defaultProps = {}

export default EmojiCookLightSkinTone
