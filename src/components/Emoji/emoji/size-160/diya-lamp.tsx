import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiDiyaLamp = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-diya-lamp"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiDiyaLamp.displayName = 'EmojiDiyaLamp'
EmojiDiyaLamp.defaultProps = {}

export default EmojiDiyaLamp
