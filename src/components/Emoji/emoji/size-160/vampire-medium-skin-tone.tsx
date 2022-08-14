import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiVampireMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-vampire-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiVampireMediumSkinTone.displayName = 'EmojiVampireMediumSkinTone'
EmojiVampireMediumSkinTone.defaultProps = {}

export default EmojiVampireMediumSkinTone
