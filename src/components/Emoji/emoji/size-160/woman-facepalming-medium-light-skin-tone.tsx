import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanFacepalmingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-facepalming-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanFacepalmingMediumLightSkinTone.displayName =
  'EmojiWomanFacepalmingMediumLightSkinTone'
EmojiWomanFacepalmingMediumLightSkinTone.defaultProps = {}

export default EmojiWomanFacepalmingMediumLightSkinTone
