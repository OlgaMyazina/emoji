import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManVampireLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-vampire-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManVampireLightSkinTone.displayName = 'EmojiManVampireLightSkinTone'
EmojiManVampireLightSkinTone.defaultProps = {}

export default EmojiManVampireLightSkinTone
