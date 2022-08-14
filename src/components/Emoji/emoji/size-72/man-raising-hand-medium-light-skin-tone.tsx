import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManRaisingHandMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-raising-hand-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManRaisingHandMediumLightSkinTone.displayName =
  'EmojiManRaisingHandMediumLightSkinTone'
EmojiManRaisingHandMediumLightSkinTone.defaultProps = {}

export default EmojiManRaisingHandMediumLightSkinTone
