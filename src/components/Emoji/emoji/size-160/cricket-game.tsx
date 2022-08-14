import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCricketGame = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-cricket-game"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCricketGame.displayName = 'EmojiCricketGame'
EmojiCricketGame.defaultProps = {}

export default EmojiCricketGame