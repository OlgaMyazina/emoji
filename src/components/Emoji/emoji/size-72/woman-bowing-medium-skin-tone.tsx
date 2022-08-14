import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanBowingMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-bowing-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanBowingMediumSkinTone.displayName = 'EmojiWomanBowingMediumSkinTone'
EmojiWomanBowingMediumSkinTone.defaultProps = {}

export default EmojiWomanBowingMediumSkinTone
