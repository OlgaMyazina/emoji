import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiHole = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-hole"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiHole.displayName = 'EmojiHole'
EmojiHole.defaultProps = {}

export default EmojiHole
