import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissManPersonMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kiss-man-person-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiKissManPersonMediumLightSkinTone.displayName =
  'EmojiKissManPersonMediumLightSkinTone'
EmojiKissManPersonMediumLightSkinTone.defaultProps = {}

export default EmojiKissManPersonMediumLightSkinTone
