import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonBeard = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-beard"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonBeard.displayName = 'EmojiPersonBeard'
EmojiPersonBeard.defaultProps = {}

export default EmojiPersonBeard
