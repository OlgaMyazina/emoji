import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiDownArrow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-down-arrow"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiDownArrow.displayName = 'EmojiDownArrow'
EmojiDownArrow.defaultProps = {}

export default EmojiDownArrow
