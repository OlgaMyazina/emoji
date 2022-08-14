import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiAngerSymbol = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-anger-symbol"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiAngerSymbol.displayName = 'EmojiAngerSymbol'
EmojiAngerSymbol.defaultProps = {}

export default EmojiAngerSymbol
