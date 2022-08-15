import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanVampireMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-vampire-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanVampireMediumDarkSkinTone.displayName =
  'EmojiWomanVampireMediumDarkSkinTone'
EmojiWomanVampireMediumDarkSkinTone.defaultProps = {}

export default EmojiWomanVampireMediumDarkSkinTone