import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSupervillainMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-supervillain-medium-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSupervillainMediumDarkSkinTone.displayName =
  'EmojiSupervillainMediumDarkSkinTone'
EmojiSupervillainMediumDarkSkinTone.defaultProps = {}

export default EmojiSupervillainMediumDarkSkinTone
