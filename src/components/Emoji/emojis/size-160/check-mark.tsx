import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCheckMark = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-check-mark"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiCheckMark.displayName = 'EmojiCheckMark'
EmojiCheckMark.defaultProps = {}

export default EmojiCheckMark
