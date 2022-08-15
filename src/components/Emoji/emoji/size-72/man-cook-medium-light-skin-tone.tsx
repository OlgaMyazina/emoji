import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManCookMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-cook-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManCookMediumLightSkinTone.displayName = 'EmojiManCookMediumLightSkinTone'
EmojiManCookMediumLightSkinTone.defaultProps = {}

export default EmojiManCookMediumLightSkinTone