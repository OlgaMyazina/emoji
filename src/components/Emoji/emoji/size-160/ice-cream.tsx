import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiIceCream = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-ice-cream"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiIceCream.displayName = 'EmojiIceCream'
EmojiIceCream.defaultProps = {}

export default EmojiIceCream
