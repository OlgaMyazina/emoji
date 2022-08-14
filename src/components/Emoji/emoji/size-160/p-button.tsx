import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-p-button"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPButton.displayName = 'EmojiPButton'
EmojiPButton.defaultProps = {}

export default EmojiPButton
