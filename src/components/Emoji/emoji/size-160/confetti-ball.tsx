import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiConfettiBall = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-confetti-ball"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiConfettiBall.displayName = 'EmojiConfettiBall'
EmojiConfettiBall.defaultProps = {}

export default EmojiConfettiBall
