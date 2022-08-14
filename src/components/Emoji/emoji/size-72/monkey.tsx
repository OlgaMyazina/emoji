import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMonkey = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-monkey"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiMonkey.displayName = 'EmojiMonkey'
EmojiMonkey.defaultProps = {}

export default EmojiMonkey
