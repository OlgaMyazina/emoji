import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiInfinity = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-infinity"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiInfinity.displayName = 'EmojiInfinity'
EmojiInfinity.defaultProps = {}

export default EmojiInfinity
