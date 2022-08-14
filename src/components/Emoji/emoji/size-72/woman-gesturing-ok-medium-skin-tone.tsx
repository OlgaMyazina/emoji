import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanGesturingOkMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-gesturing-ok-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanGesturingOkMediumSkinTone.displayName =
  'EmojiWomanGesturingOkMediumSkinTone'
EmojiWomanGesturingOkMediumSkinTone.defaultProps = {}

export default EmojiWomanGesturingOkMediumSkinTone
