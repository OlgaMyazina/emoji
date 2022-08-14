import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCurlyHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-curly-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanCurlyHair.displayName = 'EmojiWomanCurlyHair'
EmojiWomanCurlyHair.defaultProps = {}

export default EmojiWomanCurlyHair
