import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLargeGreenSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-large-green-square"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiLargeGreenSquare.displayName = 'EmojiLargeGreenSquare'
EmojiLargeGreenSquare.defaultProps = {}

export default EmojiLargeGreenSquare
