import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiNewButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-new-button"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiNewButton.displayName = 'EmojiNewButton'
EmojiNewButton.defaultProps = {}

export default EmojiNewButton
