import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBackhandIndexPointingRightDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-backhand-index-pointing-right-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiBackhandIndexPointingRightDarkSkinTone.displayName =
  'EmojiBackhandIndexPointingRightDarkSkinTone'
EmojiBackhandIndexPointingRightDarkSkinTone.defaultProps = {}

export default EmojiBackhandIndexPointingRightDarkSkinTone