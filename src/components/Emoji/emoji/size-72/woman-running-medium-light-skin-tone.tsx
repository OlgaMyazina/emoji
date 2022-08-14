import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanRunningMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-running-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanRunningMediumLightSkinTone.displayName =
  'EmojiWomanRunningMediumLightSkinTone'
EmojiWomanRunningMediumLightSkinTone.defaultProps = {}

export default EmojiWomanRunningMediumLightSkinTone
