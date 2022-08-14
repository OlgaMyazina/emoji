import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiIndexPointingUpLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-index-pointing-up-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiIndexPointingUpLightSkinTone.displayName =
  'EmojiIndexPointingUpLightSkinTone'
EmojiIndexPointingUpLightSkinTone.defaultProps = {}

export default EmojiIndexPointingUpLightSkinTone
