import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKey = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-key"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKey.displayName = 'EmojiKey'
EmojiKey.defaultProps = {}

export default EmojiKey
