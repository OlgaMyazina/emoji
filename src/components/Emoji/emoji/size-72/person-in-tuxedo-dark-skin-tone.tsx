import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonInTuxedoDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-in-tuxedo-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPersonInTuxedoDarkSkinTone.displayName = 'EmojiPersonInTuxedoDarkSkinTone'
EmojiPersonInTuxedoDarkSkinTone.defaultProps = {}

export default EmojiPersonInTuxedoDarkSkinTone
