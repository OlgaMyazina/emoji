import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMermanDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-merman-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiMermanDarkSkinTone.displayName = 'EmojiMermanDarkSkinTone'
EmojiMermanDarkSkinTone.defaultProps = {}

export default EmojiMermanDarkSkinTone
