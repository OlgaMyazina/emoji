import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonFrowningMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-frowning-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonFrowningMediumDarkSkinTone.displayName =
  'EmojiPersonFrowningMediumDarkSkinTone'
EmojiPersonFrowningMediumDarkSkinTone.defaultProps = {}

export default EmojiPersonFrowningMediumDarkSkinTone
