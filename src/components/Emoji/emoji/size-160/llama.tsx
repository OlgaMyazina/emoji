import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLlama = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-llama"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLlama.displayName = 'EmojiLlama'
EmojiLlama.defaultProps = {}

export default EmojiLlama
