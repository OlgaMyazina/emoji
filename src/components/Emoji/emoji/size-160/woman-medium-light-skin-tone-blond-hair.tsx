import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanMediumLightSkinToneBlondHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-medium-light-skin-tone-blond-hair"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanMediumLightSkinToneBlondHair.displayName =
  'EmojiWomanMediumLightSkinToneBlondHair'
EmojiWomanMediumLightSkinToneBlondHair.defaultProps = {}

export default EmojiWomanMediumLightSkinToneBlondHair
