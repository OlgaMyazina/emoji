import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRhinoceros = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-rhinoceros"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRhinoceros.displayName = 'EmojiRhinoceros'
EmojiRhinoceros.defaultProps = {}

export default EmojiRhinoceros
