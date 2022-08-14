import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMonkeyFace = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-monkey-face"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiMonkeyFace.displayName = 'EmojiMonkeyFace'
EmojiMonkeyFace.defaultProps = {}

export default EmojiMonkeyFace
