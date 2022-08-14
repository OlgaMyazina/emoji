import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonPlayingHandballLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-playing-handball-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiPersonPlayingHandballLightSkinTone.displayName = 'EmojiPersonPlayingHandballLightSkinTone'
EmojiPersonPlayingHandballLightSkinTone.defaultProps = {}

export default EmojiPersonPlayingHandballLightSkinTone
