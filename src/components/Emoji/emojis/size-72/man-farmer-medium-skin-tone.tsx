import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManFarmerMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-farmer-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManFarmerMediumSkinTone.displayName = 'EmojiManFarmerMediumSkinTone'
EmojiManFarmerMediumSkinTone.defaultProps = {}

export default EmojiManFarmerMediumSkinTone