import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanLightSkinToneRedHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-light-skin-tone-red-hair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanLightSkinToneRedHair.displayName = 'EmojiWomanLightSkinToneRedHair'
EmojiWomanLightSkinToneRedHair.defaultProps = {}

export default EmojiWomanLightSkinToneRedHair
