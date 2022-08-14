import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLockedWithPen = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-locked-with-pen"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLockedWithPen.displayName = 'EmojiLockedWithPen'
EmojiLockedWithPen.defaultProps = {}

export default EmojiLockedWithPen
