import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiOncomingFistLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-oncoming-fist-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiOncomingFistLightSkinTone.displayName = 'EmojiOncomingFistLightSkinTone'
EmojiOncomingFistLightSkinTone.defaultProps = {}

export default EmojiOncomingFistLightSkinTone
