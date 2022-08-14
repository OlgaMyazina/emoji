import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManScientistLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-scientist-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManScientistLightSkinTone.displayName = 'EmojiManScientistLightSkinTone'
EmojiManScientistLightSkinTone.defaultProps = {}

export default EmojiManScientistLightSkinTone
