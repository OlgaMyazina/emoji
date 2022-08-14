import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonCartwheelingMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-cartwheeling-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonCartwheelingMediumSkinTone.displayName =
  'EmojiPersonCartwheelingMediumSkinTone'
EmojiPersonCartwheelingMediumSkinTone.defaultProps = {}

export default EmojiPersonCartwheelingMediumSkinTone
