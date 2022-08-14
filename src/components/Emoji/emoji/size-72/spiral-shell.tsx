import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSpiralShell = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-spiral-shell"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSpiralShell.displayName = 'EmojiSpiralShell'
EmojiSpiralShell.defaultProps = {}

export default EmojiSpiralShell
