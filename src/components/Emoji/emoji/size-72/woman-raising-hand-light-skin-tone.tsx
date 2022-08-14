import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanRaisingHandLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-raising-hand-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanRaisingHandLightSkinTone.displayName =
  'EmojiWomanRaisingHandLightSkinTone'
EmojiWomanRaisingHandLightSkinTone.defaultProps = {}

export default EmojiWomanRaisingHandLightSkinTone
