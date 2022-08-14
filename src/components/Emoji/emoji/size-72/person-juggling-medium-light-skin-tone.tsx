import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonJugglingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-juggling-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonJugglingMediumLightSkinTone.displayName =
  'EmojiPersonJugglingMediumLightSkinTone'
EmojiPersonJugglingMediumLightSkinTone.defaultProps = {}

export default EmojiPersonJugglingMediumLightSkinTone
