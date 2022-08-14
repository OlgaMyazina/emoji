import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiThreeOclock = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-three-oclock"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiThreeOclock.displayName = 'EmojiThreeOclock'
EmojiThreeOclock.defaultProps = {}

export default EmojiThreeOclock
