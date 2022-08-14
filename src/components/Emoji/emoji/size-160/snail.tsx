import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSnail = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-snail"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSnail.displayName = 'EmojiSnail'
EmojiSnail.defaultProps = {}

export default EmojiSnail
