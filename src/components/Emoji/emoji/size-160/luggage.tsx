import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLuggage = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-luggage"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLuggage.displayName = 'EmojiLuggage'
EmojiLuggage.defaultProps = {}

export default EmojiLuggage
