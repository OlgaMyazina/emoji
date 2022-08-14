import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSelfieMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-selfie-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSelfieMediumSkinTone.displayName = 'EmojiSelfieMediumSkinTone'
EmojiSelfieMediumSkinTone.defaultProps = {}

export default EmojiSelfieMediumSkinTone
