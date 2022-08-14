import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBalanceScale = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-balance-scale"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBalanceScale.displayName = 'EmojiBalanceScale'
EmojiBalanceScale.defaultProps = {}

export default EmojiBalanceScale
