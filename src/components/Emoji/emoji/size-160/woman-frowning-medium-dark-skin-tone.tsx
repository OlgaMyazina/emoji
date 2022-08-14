import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanFrowningMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-frowning-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanFrowningMediumDarkSkinTone.displayName =
  'EmojiWomanFrowningMediumDarkSkinTone'
EmojiWomanFrowningMediumDarkSkinTone.defaultProps = {}

export default EmojiWomanFrowningMediumDarkSkinTone
