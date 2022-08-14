import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonKneelingMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-kneeling-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonKneelingMediumDarkSkinTone.displayName =
  'EmojiPersonKneelingMediumDarkSkinTone'
EmojiPersonKneelingMediumDarkSkinTone.defaultProps = {}

export default EmojiPersonKneelingMediumDarkSkinTone
