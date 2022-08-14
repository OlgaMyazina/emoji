import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSingerMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-singer-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSingerMediumDarkSkinTone.displayName = 'EmojiSingerMediumDarkSkinTone'
EmojiSingerMediumDarkSkinTone.defaultProps = {}

export default EmojiSingerMediumDarkSkinTone
