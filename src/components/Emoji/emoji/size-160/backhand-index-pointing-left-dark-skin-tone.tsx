import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBackhandIndexPointingLeftDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-backhand-index-pointing-left-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiBackhandIndexPointingLeftDarkSkinTone.displayName =
  'EmojiBackhandIndexPointingLeftDarkSkinTone'
EmojiBackhandIndexPointingLeftDarkSkinTone.defaultProps = {}

export default EmojiBackhandIndexPointingLeftDarkSkinTone
