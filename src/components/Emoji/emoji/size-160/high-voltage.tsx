import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiHighVoltage = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-high-voltage"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiHighVoltage.displayName = 'EmojiHighVoltage'
EmojiHighVoltage.defaultProps = {}

export default EmojiHighVoltage
