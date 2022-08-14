import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanCartwheelingLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-cartwheeling-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanCartwheelingLightSkinTone.displayName =
  'EmojiWomanCartwheelingLightSkinTone'
EmojiWomanCartwheelingLightSkinTone.defaultProps = {}

export default EmojiWomanCartwheelingLightSkinTone
