import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiJapaneseProhibitedButton = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-japanese-prohibited-button"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiJapaneseProhibitedButton.displayName = 'EmojiJapaneseProhibitedButton'
EmojiJapaneseProhibitedButton.defaultProps = {}

export default EmojiJapaneseProhibitedButton
