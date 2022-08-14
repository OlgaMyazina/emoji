import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManJugglingLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-juggling-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManJugglingLightSkinTone.displayName = 'EmojiManJugglingLightSkinTone'
EmojiManJugglingLightSkinTone.defaultProps = {}

export default EmojiManJugglingLightSkinTone
