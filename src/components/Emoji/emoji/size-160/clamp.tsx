import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiClamp = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-clamp"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiClamp.displayName = 'EmojiClamp'
EmojiClamp.defaultProps = {}

export default EmojiClamp
