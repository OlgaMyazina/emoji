import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSpadeSuit = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-spade-suit"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiSpadeSuit.displayName = 'EmojiSpadeSuit'
EmojiSpadeSuit.defaultProps = {}

export default EmojiSpadeSuit
