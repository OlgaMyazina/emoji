import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManFacepalmingDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-facepalming-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManFacepalmingDarkSkinTone.displayName = 'EmojiManFacepalmingDarkSkinTone'
EmojiManFacepalmingDarkSkinTone.defaultProps = {}

export default EmojiManFacepalmingDarkSkinTone
