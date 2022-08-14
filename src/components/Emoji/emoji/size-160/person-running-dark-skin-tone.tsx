import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonRunningDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-running-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonRunningDarkSkinTone.displayName = 'EmojiPersonRunningDarkSkinTone'
EmojiPersonRunningDarkSkinTone.defaultProps = {}

export default EmojiPersonRunningDarkSkinTone
