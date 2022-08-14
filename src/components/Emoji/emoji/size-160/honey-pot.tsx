import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiHoneyPot = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-honey-pot"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiHoneyPot.displayName = 'EmojiHoneyPot'
EmojiHoneyPot.defaultProps = {}

export default EmojiHoneyPot
