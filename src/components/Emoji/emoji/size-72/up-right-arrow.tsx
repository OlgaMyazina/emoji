import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiUpRightArrow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-up-right-arrow"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiUpRightArrow.displayName = 'EmojiUpRightArrow'
EmojiUpRightArrow.defaultProps = {}

export default EmojiUpRightArrow
