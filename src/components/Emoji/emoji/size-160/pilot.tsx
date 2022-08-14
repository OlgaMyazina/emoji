import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPilot = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-pilot"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPilot.displayName = 'EmojiPilot'
EmojiPilot.defaultProps = {}

export default EmojiPilot
