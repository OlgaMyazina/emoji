import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanRowingBoatMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-rowing-boat-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanRowingBoatMediumSkinTone.displayName =
  'EmojiWomanRowingBoatMediumSkinTone'
EmojiWomanRowingBoatMediumSkinTone.defaultProps = {}

export default EmojiWomanRowingBoatMediumSkinTone
