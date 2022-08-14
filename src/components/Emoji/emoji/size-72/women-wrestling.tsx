import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomenWrestling = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-women-wrestling"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomenWrestling.displayName = 'EmojiWomenWrestling'
EmojiWomenWrestling.defaultProps = {}

export default EmojiWomenWrestling
