import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissWomanManDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-woman-man-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissWomanManDarkSkinTone.displayName = 'EmojiKissWomanManDarkSkinTone'
EmojiKissWomanManDarkSkinTone.defaultProps = {}

export default EmojiKissWomanManDarkSkinTone
