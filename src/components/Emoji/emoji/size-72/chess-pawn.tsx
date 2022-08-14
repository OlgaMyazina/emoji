import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiChessPawn = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-chess-pawn"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiChessPawn.displayName = 'EmojiChessPawn'
EmojiChessPawn.defaultProps = {}

export default EmojiChessPawn
