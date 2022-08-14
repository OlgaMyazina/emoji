import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonFeedingBabyMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-feeding-baby-medium-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonFeedingBabyMediumSkinTone.displayName =
  'EmojiPersonFeedingBabyMediumSkinTone'
EmojiPersonFeedingBabyMediumSkinTone.defaultProps = {}

export default EmojiPersonFeedingBabyMediumSkinTone
