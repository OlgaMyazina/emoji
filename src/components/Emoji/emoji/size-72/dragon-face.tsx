import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiDragonFace = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-dragon-face"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiDragonFace.displayName = 'EmojiDragonFace'
EmojiDragonFace.defaultProps = {}

export default EmojiDragonFace
