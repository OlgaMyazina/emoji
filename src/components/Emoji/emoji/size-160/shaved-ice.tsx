import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiShavedIce = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-shaved-ice"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiShavedIce.displayName = 'EmojiShavedIce'
EmojiShavedIce.defaultProps = {}

export default EmojiShavedIce