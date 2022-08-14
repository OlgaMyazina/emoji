import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManLightSkinToneRedHair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-light-skin-tone-red-hair"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManLightSkinToneRedHair.displayName = 'EmojiManLightSkinToneRedHair'
EmojiManLightSkinToneRedHair.defaultProps = {}

export default EmojiManLightSkinToneRedHair
