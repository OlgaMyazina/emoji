import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonCartwheelingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-cartwheeling-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonCartwheelingMediumLightSkinTone.displayName =
  'EmojiPersonCartwheelingMediumLightSkinTone'
EmojiPersonCartwheelingMediumLightSkinTone.defaultProps = {}

export default EmojiPersonCartwheelingMediumLightSkinTone
