import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanRowingBoatDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-rowing-boat-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanRowingBoatDarkSkinTone.displayName =
  'EmojiWomanRowingBoatDarkSkinTone'
EmojiWomanRowingBoatDarkSkinTone.defaultProps = {}

export default EmojiWomanRowingBoatDarkSkinTone
