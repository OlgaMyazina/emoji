import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManTippingHandMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-tipping-hand-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManTippingHandMediumDarkSkinTone.displayName =
  'EmojiManTippingHandMediumDarkSkinTone'
EmojiManTippingHandMediumDarkSkinTone.defaultProps = {}

export default EmojiManTippingHandMediumDarkSkinTone
