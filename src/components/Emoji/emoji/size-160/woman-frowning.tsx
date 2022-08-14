import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanFrowning = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-frowning"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanFrowning.displayName = 'EmojiWomanFrowning'
EmojiWomanFrowning.defaultProps = {}

export default EmojiWomanFrowning
