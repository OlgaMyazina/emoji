import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonPouting = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-pouting"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonPouting.displayName = 'EmojiPersonPouting'
EmojiPersonPouting.defaultProps = {}

export default EmojiPersonPouting
