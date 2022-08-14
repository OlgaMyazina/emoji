import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManBikingMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-biking-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManBikingMediumDarkSkinTone.displayName =
  'EmojiManBikingMediumDarkSkinTone'
EmojiManBikingMediumDarkSkinTone.defaultProps = {}

export default EmojiManBikingMediumDarkSkinTone