import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManGuardMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-guard-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManGuardMediumDarkSkinTone.displayName = 'EmojiManGuardMediumDarkSkinTone'
EmojiManGuardMediumDarkSkinTone.defaultProps = {}

export default EmojiManGuardMediumDarkSkinTone
