import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRunningShirt = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-running-shirt"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRunningShirt.displayName = 'EmojiRunningShirt'
EmojiRunningShirt.defaultProps = {}

export default EmojiRunningShirt
