import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSelfieDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-selfie-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSelfieDarkSkinTone.displayName = 'EmojiSelfieDarkSkinTone'
EmojiSelfieDarkSkinTone.defaultProps = {}

export default EmojiSelfieDarkSkinTone
