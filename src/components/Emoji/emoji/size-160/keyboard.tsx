import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKeyboard = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-keyboard"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKeyboard.displayName = 'EmojiKeyboard'
EmojiKeyboard.defaultProps = {}

export default EmojiKeyboard
