import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiStopSign = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-stop-sign"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiStopSign.displayName = 'EmojiStopSign'
EmojiStopSign.defaultProps = {}

export default EmojiStopSign
