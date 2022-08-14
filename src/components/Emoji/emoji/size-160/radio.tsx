import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRadio = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-radio"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiRadio.displayName = 'EmojiRadio'
EmojiRadio.defaultProps = {}

export default EmojiRadio
