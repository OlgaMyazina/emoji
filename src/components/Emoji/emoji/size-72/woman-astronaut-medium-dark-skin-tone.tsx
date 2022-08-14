import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanAstronautMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-astronaut-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanAstronautMediumDarkSkinTone.displayName =
  'EmojiWomanAstronautMediumDarkSkinTone'
EmojiWomanAstronautMediumDarkSkinTone.defaultProps = {}

export default EmojiWomanAstronautMediumDarkSkinTone
