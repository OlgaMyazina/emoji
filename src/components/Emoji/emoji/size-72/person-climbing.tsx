import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonClimbing = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-climbing"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonClimbing.displayName = 'EmojiPersonClimbing'
EmojiPersonClimbing.defaultProps = {}

export default EmojiPersonClimbing
