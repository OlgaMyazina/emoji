import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanGolfing = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-golfing"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanGolfing.displayName = 'EmojiWomanGolfing'
EmojiWomanGolfing.defaultProps = {}

export default EmojiWomanGolfing
