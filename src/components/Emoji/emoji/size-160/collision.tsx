import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCollision = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-collision"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiCollision.displayName = 'EmojiCollision'
EmojiCollision.defaultProps = {}

export default EmojiCollision