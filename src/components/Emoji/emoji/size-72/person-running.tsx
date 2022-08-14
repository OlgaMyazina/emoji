import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonRunning = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-running"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonRunning.displayName = 'EmojiPersonRunning'
EmojiPersonRunning.defaultProps = {}

export default EmojiPersonRunning
