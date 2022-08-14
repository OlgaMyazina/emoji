import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonBowing = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-bowing"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonBowing.displayName = 'EmojiPersonBowing'
EmojiPersonBowing.defaultProps = {}

export default EmojiPersonBowing
