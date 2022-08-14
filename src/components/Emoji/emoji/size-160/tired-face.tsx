import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTiredFace = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-tired-face"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTiredFace.displayName = 'EmojiTiredFace'
EmojiTiredFace.defaultProps = {}

export default EmojiTiredFace
