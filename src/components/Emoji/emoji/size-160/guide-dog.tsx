import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiGuideDog = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-guide-dog"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiGuideDog.displayName = 'EmojiGuideDog'
EmojiGuideDog.defaultProps = {}

export default EmojiGuideDog
