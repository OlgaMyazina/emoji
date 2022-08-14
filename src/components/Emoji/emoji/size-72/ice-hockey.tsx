import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiIceHockey = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-ice-hockey"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiIceHockey.displayName = 'EmojiIceHockey'
EmojiIceHockey.defaultProps = {}

export default EmojiIceHockey
