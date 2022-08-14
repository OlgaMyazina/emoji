import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiIndexPointingUpMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-index-pointing-up-medium-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiIndexPointingUpMediumSkinTone.displayName =
  'EmojiIndexPointingUpMediumSkinTone'
EmojiIndexPointingUpMediumSkinTone.defaultProps = {}

export default EmojiIndexPointingUpMediumSkinTone
