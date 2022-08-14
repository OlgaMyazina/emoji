import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMountain = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-mountain"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiMountain.displayName = 'EmojiMountain'
EmojiMountain.defaultProps = {}

export default EmojiMountain
