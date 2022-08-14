import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonClimbingMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-climbing-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonClimbingMediumLightSkinTone.displayName =
  'EmojiPersonClimbingMediumLightSkinTone'
EmojiPersonClimbingMediumLightSkinTone.defaultProps = {}

export default EmojiPersonClimbingMediumLightSkinTone
