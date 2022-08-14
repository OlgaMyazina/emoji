import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanSwimmingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-swimming-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanSwimmingMediumLightSkinTone.displayName =
  'EmojiWomanSwimmingMediumLightSkinTone'
EmojiWomanSwimmingMediumLightSkinTone.defaultProps = {}

export default EmojiWomanSwimmingMediumLightSkinTone
