import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManSurfingLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-surfing-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManSurfingLightSkinTone.displayName = 'EmojiManSurfingLightSkinTone'
EmojiManSurfingLightSkinTone.defaultProps = {}

export default EmojiManSurfingLightSkinTone
