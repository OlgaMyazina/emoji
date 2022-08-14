import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCartwheeling = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-cartwheeling"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanCartwheeling.displayName = 'EmojiWomanCartwheeling'
EmojiWomanCartwheeling.defaultProps = {}

export default EmojiWomanCartwheeling
