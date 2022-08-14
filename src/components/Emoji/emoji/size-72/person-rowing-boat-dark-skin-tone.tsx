import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonRowingBoatDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-rowing-boat-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonRowingBoatDarkSkinTone.displayName =
  'EmojiPersonRowingBoatDarkSkinTone'
EmojiPersonRowingBoatDarkSkinTone.defaultProps = {}

export default EmojiPersonRowingBoatDarkSkinTone
