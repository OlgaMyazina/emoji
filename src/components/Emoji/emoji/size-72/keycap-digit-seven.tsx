import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKeycapDigitSeven = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-keycap-digit-seven"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKeycapDigitSeven.displayName = 'EmojiKeycapDigitSeven'
EmojiKeycapDigitSeven.defaultProps = {}

export default EmojiKeycapDigitSeven
