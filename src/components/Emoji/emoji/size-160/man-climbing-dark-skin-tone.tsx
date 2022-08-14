import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManClimbingDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-climbing-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManClimbingDarkSkinTone.displayName = 'EmojiManClimbingDarkSkinTone'
EmojiManClimbingDarkSkinTone.defaultProps = {}

export default EmojiManClimbingDarkSkinTone
