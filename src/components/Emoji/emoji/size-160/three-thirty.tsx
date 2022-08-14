import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiThreeThirty = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-three-thirty"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiThreeThirty.displayName = 'EmojiThreeThirty'
EmojiThreeThirty.defaultProps = {}

export default EmojiThreeThirty
