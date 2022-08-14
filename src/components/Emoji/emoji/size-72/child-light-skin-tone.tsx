import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiChildLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-child-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiChildLightSkinTone.displayName = 'EmojiChildLightSkinTone'
EmojiChildLightSkinTone.defaultProps = {}

export default EmojiChildLightSkinTone
