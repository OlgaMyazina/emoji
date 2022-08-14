import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiZebra = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-zebra"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiZebra.displayName = 'EmojiZebra'
EmojiZebra.defaultProps = {}

export default EmojiZebra
