import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanMageDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-mage-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanMageDarkSkinTone.displayName = 'EmojiWomanMageDarkSkinTone'
EmojiWomanMageDarkSkinTone.defaultProps = {}

export default EmojiWomanMageDarkSkinTone
