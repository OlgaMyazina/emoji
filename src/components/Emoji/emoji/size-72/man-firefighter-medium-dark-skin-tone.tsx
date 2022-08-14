import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManFirefighterMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-firefighter-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManFirefighterMediumDarkSkinTone.displayName =
  'EmojiManFirefighterMediumDarkSkinTone'
EmojiManFirefighterMediumDarkSkinTone.defaultProps = {}

export default EmojiManFirefighterMediumDarkSkinTone
