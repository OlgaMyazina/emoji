import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTeddyBear = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-teddy-bear"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTeddyBear.displayName = 'EmojiTeddyBear'
EmojiTeddyBear.defaultProps = {}

export default EmojiTeddyBear
