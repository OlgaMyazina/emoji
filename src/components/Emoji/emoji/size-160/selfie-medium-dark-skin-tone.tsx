import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSelfieMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-selfie-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiSelfieMediumDarkSkinTone.displayName = 'EmojiSelfieMediumDarkSkinTone'
EmojiSelfieMediumDarkSkinTone.defaultProps = {}

export default EmojiSelfieMediumDarkSkinTone
