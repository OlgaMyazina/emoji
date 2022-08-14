import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLipstick = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-lipstick"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLipstick.displayName = 'EmojiLipstick'
EmojiLipstick.defaultProps = {}

export default EmojiLipstick
