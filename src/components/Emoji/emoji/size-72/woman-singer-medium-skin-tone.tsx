import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanSingerMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-singer-medium-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanSingerMediumSkinTone.displayName = 'EmojiWomanSingerMediumSkinTone'
EmojiWomanSingerMediumSkinTone.defaultProps = {}

export default EmojiWomanSingerMediumSkinTone
