import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiDeafPersonMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-deaf-person-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiDeafPersonMediumDarkSkinTone.displayName =
  'EmojiDeafPersonMediumDarkSkinTone'
EmojiDeafPersonMediumDarkSkinTone.defaultProps = {}

export default EmojiDeafPersonMediumDarkSkinTone
