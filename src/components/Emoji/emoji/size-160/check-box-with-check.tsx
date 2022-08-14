import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCheckBoxWithCheck = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-check-box-with-check"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCheckBoxWithCheck.displayName = 'EmojiCheckBoxWithCheck'
EmojiCheckBoxWithCheck.defaultProps = {}

export default EmojiCheckBoxWithCheck
