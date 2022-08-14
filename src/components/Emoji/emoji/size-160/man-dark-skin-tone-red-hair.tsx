import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManDarkSkinToneRedHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-dark-skin-tone-red-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManDarkSkinToneRedHair.displayName = 'EmojiManDarkSkinToneRedHair'
EmojiManDarkSkinToneRedHair.defaultProps = {}

export default EmojiManDarkSkinToneRedHair
