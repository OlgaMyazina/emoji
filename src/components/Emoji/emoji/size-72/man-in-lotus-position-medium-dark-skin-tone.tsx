import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManInLotusPositionMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-in-lotus-position-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManInLotusPositionMediumDarkSkinTone.displayName =
  'EmojiManInLotusPositionMediumDarkSkinTone'
EmojiManInLotusPositionMediumDarkSkinTone.defaultProps = {}

export default EmojiManInLotusPositionMediumDarkSkinTone
