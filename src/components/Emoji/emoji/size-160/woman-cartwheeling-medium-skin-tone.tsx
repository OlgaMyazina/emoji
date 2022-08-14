import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCartwheelingMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-cartwheeling-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanCartwheelingMediumSkinTone.displayName =
  'EmojiWomanCartwheelingMediumSkinTone'
EmojiWomanCartwheelingMediumSkinTone.defaultProps = {}

export default EmojiWomanCartwheelingMediumSkinTone
