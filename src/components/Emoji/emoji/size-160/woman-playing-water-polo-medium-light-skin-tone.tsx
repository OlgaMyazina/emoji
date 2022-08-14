import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanPlayingWaterPoloMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-playing-water-polo-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanPlayingWaterPoloMediumLightSkinTone.displayName =
  'EmojiWomanPlayingWaterPoloMediumLightSkinTone'
EmojiWomanPlayingWaterPoloMediumLightSkinTone.defaultProps = {}

export default EmojiWomanPlayingWaterPoloMediumLightSkinTone
