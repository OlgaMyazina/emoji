import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManMediumLightSkinToneBlondHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-medium-light-skin-tone-blond-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManMediumLightSkinToneBlondHair.displayName =
  'EmojiManMediumLightSkinToneBlondHair'
EmojiManMediumLightSkinToneBlondHair.defaultProps = {}

export default EmojiManMediumLightSkinToneBlondHair
