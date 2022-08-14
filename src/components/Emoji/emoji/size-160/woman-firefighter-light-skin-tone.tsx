import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanFirefighterLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-firefighter-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiWomanFirefighterLightSkinTone.displayName = 'EmojiWomanFirefighterLightSkinTone'
EmojiWomanFirefighterLightSkinTone.defaultProps = {}

export default EmojiWomanFirefighterLightSkinTone
