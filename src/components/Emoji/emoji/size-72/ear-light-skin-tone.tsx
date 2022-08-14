import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiEarLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-ear-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiEarLightSkinTone.displayName = 'EmojiEarLightSkinTone'
EmojiEarLightSkinTone.defaultProps = {}

export default EmojiEarLightSkinTone