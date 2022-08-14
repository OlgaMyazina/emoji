import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiNailPolishDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-nail-polish-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiNailPolishDarkSkinTone.displayName = 'EmojiNailPolishDarkSkinTone'
EmojiNailPolishDarkSkinTone.defaultProps = {}

export default EmojiNailPolishDarkSkinTone
