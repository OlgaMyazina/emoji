import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiOncomingFist = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-oncoming-fist"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiOncomingFist.displayName = 'EmojiOncomingFist'
EmojiOncomingFist.defaultProps = {}

export default EmojiOncomingFist
