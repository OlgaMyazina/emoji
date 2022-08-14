import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBackhandIndexPointingDownMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-backhand-index-pointing-down-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBackhandIndexPointingDownMediumDarkSkinTone.displayName =
  'EmojiBackhandIndexPointingDownMediumDarkSkinTone'
EmojiBackhandIndexPointingDownMediumDarkSkinTone.defaultProps = {}

export default EmojiBackhandIndexPointingDownMediumDarkSkinTone
