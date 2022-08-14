import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManStandingLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-standing-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManStandingLightSkinTone.displayName = 'EmojiManStandingLightSkinTone'
EmojiManStandingLightSkinTone.defaultProps = {}

export default EmojiManStandingLightSkinTone
