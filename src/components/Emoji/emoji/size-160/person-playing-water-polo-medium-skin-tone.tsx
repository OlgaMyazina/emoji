import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonPlayingWaterPoloMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-playing-water-polo-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonPlayingWaterPoloMediumSkinTone.displayName =
  'EmojiPersonPlayingWaterPoloMediumSkinTone'
EmojiPersonPlayingWaterPoloMediumSkinTone.defaultProps = {}

export default EmojiPersonPlayingWaterPoloMediumSkinTone
