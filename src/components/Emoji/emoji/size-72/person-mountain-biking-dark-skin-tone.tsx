import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonMountainBikingDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-mountain-biking-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonMountainBikingDarkSkinTone.displayName =
  'EmojiPersonMountainBikingDarkSkinTone'
EmojiPersonMountainBikingDarkSkinTone.defaultProps = {}

export default EmojiPersonMountainBikingDarkSkinTone
