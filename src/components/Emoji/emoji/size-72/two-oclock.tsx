import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTwoOclock = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-two-oclock"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTwoOclock.displayName = 'EmojiTwoOclock'
EmojiTwoOclock.defaultProps = {}

export default EmojiTwoOclock
