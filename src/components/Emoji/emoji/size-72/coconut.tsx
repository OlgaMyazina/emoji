import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoconut = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-coconut"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiCoconut.displayName = 'EmojiCoconut'
EmojiCoconut.defaultProps = {}

export default EmojiCoconut
