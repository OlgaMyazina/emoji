import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManGettingHaircutMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-getting-haircut-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManGettingHaircutMediumLightSkinTone.displayName =
  'EmojiManGettingHaircutMediumLightSkinTone'
EmojiManGettingHaircutMediumLightSkinTone.defaultProps = {}

export default EmojiManGettingHaircutMediumLightSkinTone
