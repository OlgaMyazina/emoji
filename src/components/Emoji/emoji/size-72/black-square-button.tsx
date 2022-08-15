import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBlackSquareButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-black-square-button"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBlackSquareButton.displayName = 'EmojiBlackSquareButton'
EmojiBlackSquareButton.defaultProps = {}

export default EmojiBlackSquareButton