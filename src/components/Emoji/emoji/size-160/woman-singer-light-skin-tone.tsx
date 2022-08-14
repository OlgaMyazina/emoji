import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanSingerLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-singer-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanSingerLightSkinTone.displayName = 'EmojiWomanSingerLightSkinTone'
EmojiWomanSingerLightSkinTone.defaultProps = {}

export default EmojiWomanSingerLightSkinTone
