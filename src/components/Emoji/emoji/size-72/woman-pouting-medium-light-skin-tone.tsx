import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanPoutingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-pouting-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanPoutingMediumLightSkinTone.displayName =
  'EmojiWomanPoutingMediumLightSkinTone'
EmojiWomanPoutingMediumLightSkinTone.defaultProps = {}

export default EmojiWomanPoutingMediumLightSkinTone
