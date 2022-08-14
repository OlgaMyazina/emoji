import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiJapaneseApplicationButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-japanese-application-button"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiJapaneseApplicationButton.displayName = 'EmojiJapaneseApplicationButton'
EmojiJapaneseApplicationButton.defaultProps = {}

export default EmojiJapaneseApplicationButton
