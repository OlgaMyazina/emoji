import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManSupervillainMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-supervillain-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManSupervillainMediumSkinTone.displayName =
  'EmojiManSupervillainMediumSkinTone'
EmojiManSupervillainMediumSkinTone.defaultProps = {}

export default EmojiManSupervillainMediumSkinTone
