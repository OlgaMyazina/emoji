import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCrocodile = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-crocodile"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCrocodile.displayName = 'EmojiCrocodile'
EmojiCrocodile.defaultProps = {}

export default EmojiCrocodile
