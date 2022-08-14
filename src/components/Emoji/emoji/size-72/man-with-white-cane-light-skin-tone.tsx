import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManWithWhiteCaneLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-with-white-cane-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManWithWhiteCaneLightSkinTone.displayName =
  'EmojiManWithWhiteCaneLightSkinTone'
EmojiManWithWhiteCaneLightSkinTone.defaultProps = {}

export default EmojiManWithWhiteCaneLightSkinTone
