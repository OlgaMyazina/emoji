import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRedApple = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-red-apple"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRedApple.displayName = 'EmojiRedApple'
EmojiRedApple.defaultProps = {}

export default EmojiRedApple