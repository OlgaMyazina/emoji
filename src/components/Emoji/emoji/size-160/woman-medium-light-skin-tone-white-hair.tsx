import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanMediumLightSkinToneWhiteHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-medium-light-skin-tone-white-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanMediumLightSkinToneWhiteHair.displayName =
  'EmojiWomanMediumLightSkinToneWhiteHair'
EmojiWomanMediumLightSkinToneWhiteHair.defaultProps = {}

export default EmojiWomanMediumLightSkinToneWhiteHair
