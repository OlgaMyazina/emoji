import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonJugglingLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-juggling-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonJugglingLightSkinTone.displayName = 'EmojiPersonJugglingLightSkinTone'
EmojiPersonJugglingLightSkinTone.defaultProps = {}

export default EmojiPersonJugglingLightSkinTone
