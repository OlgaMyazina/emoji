import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPear = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-pear"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiPear.displayName = 'EmojiPear'
EmojiPear.defaultProps = {}

export default EmojiPear
