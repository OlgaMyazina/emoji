import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanWithVeil = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-with-veil"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanWithVeil.displayName = 'EmojiWomanWithVeil'
EmojiWomanWithVeil.defaultProps = {}

export default EmojiWomanWithVeil
