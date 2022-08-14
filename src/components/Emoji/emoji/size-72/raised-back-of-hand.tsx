import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRaisedBackOfHand = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-raised-back-of-hand"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRaisedBackOfHand.displayName = 'EmojiRaisedBackOfHand'
EmojiRaisedBackOfHand.defaultProps = {}

export default EmojiRaisedBackOfHand
