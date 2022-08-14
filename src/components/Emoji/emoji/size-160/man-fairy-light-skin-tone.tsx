import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManFairyLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-fairy-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManFairyLightSkinTone.displayName = 'EmojiManFairyLightSkinTone'
EmojiManFairyLightSkinTone.defaultProps = {}

export default EmojiManFairyLightSkinTone
