import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonGettingHaircutMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-getting-haircut-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonGettingHaircutMediumLightSkinTone.displayName =
  'EmojiPersonGettingHaircutMediumLightSkinTone'
EmojiPersonGettingHaircutMediumLightSkinTone.defaultProps = {}

export default EmojiPersonGettingHaircutMediumLightSkinTone
