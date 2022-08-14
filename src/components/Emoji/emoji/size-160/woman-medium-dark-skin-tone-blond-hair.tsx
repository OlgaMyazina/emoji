import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanMediumDarkSkinToneBlondHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-medium-dark-skin-tone-blond-hair"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanMediumDarkSkinToneBlondHair.displayName =
  'EmojiWomanMediumDarkSkinToneBlondHair'
EmojiWomanMediumDarkSkinToneBlondHair.defaultProps = {}

export default EmojiWomanMediumDarkSkinToneBlondHair
