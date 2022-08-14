import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiTeacupWithoutHandle = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-teacup-without-handle"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiTeacupWithoutHandle.displayName = 'EmojiTeacupWithoutHandle'
EmojiTeacupWithoutHandle.defaultProps = {}

export default EmojiTeacupWithoutHandle
