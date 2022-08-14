import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiNoseMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-nose-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiNoseMediumDarkSkinTone.displayName = 'EmojiNoseMediumDarkSkinTone'
EmojiNoseMediumDarkSkinTone.defaultProps = {}

export default EmojiNoseMediumDarkSkinTone
