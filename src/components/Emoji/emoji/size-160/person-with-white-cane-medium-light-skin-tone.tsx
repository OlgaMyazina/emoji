import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonWithWhiteCaneMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-with-white-cane-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonWithWhiteCaneMediumLightSkinTone.displayName =
  'EmojiPersonWithWhiteCaneMediumLightSkinTone'
EmojiPersonWithWhiteCaneMediumLightSkinTone.defaultProps = {}

export default EmojiPersonWithWhiteCaneMediumLightSkinTone
