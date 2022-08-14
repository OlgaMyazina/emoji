import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCookDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-cook-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanCookDarkSkinTone.displayName = 'EmojiWomanCookDarkSkinTone'
EmojiWomanCookDarkSkinTone.defaultProps = {}

export default EmojiWomanCookDarkSkinTone
