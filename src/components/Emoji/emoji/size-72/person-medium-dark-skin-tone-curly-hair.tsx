import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonMediumDarkSkinToneCurlyHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-medium-dark-skin-tone-curly-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonMediumDarkSkinToneCurlyHair.displayName =
  'EmojiPersonMediumDarkSkinToneCurlyHair'
EmojiPersonMediumDarkSkinToneCurlyHair.defaultProps = {}

export default EmojiPersonMediumDarkSkinToneCurlyHair
