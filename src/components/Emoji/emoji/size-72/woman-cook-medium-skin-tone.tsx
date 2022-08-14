import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCookMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-cook-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanCookMediumSkinTone.displayName = 'EmojiWomanCookMediumSkinTone'
EmojiWomanCookMediumSkinTone.defaultProps = {}

export default EmojiWomanCookMediumSkinTone
