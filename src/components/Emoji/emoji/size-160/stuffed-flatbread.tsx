import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiStuffedFlatbread = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-stuffed-flatbread"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiStuffedFlatbread.displayName = 'EmojiStuffedFlatbread'
EmojiStuffedFlatbread.defaultProps = {}

export default EmojiStuffedFlatbread
