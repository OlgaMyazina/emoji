import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSkier = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-skier"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSkier.displayName = 'EmojiSkier'
EmojiSkier.defaultProps = {}

export default EmojiSkier
