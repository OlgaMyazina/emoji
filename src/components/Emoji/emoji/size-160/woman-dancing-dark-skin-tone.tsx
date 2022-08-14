import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanDancingDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-dancing-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanDancingDarkSkinTone.displayName = 'EmojiWomanDancingDarkSkinTone'
EmojiWomanDancingDarkSkinTone.defaultProps = {}

export default EmojiWomanDancingDarkSkinTone
