import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiInputNumbers = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-input-numbers"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiInputNumbers.displayName = 'EmojiInputNumbers'
EmojiInputNumbers.defaultProps = {}

export default EmojiInputNumbers
