import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiVictoryHandDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-victory-hand-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiVictoryHandDarkSkinTone.displayName = 'EmojiVictoryHandDarkSkinTone'
EmojiVictoryHandDarkSkinTone.defaultProps = {}

export default EmojiVictoryHandDarkSkinTone
