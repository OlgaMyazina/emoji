import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanAndManHoldingHands = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-and-man-holding-hands"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanAndManHoldingHands.displayName = 'EmojiWomanAndManHoldingHands'
EmojiWomanAndManHoldingHands.defaultProps = {}

export default EmojiWomanAndManHoldingHands
