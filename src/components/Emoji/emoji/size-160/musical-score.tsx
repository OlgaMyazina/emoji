import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMusicalScore = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-musical-score"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiMusicalScore.displayName = 'EmojiMusicalScore'
EmojiMusicalScore.defaultProps = {}

export default EmojiMusicalScore
