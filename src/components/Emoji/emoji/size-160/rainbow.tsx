import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRainbow = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-rainbow"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRainbow.displayName = 'EmojiRainbow'
EmojiRainbow.defaultProps = {}

export default EmojiRainbow
