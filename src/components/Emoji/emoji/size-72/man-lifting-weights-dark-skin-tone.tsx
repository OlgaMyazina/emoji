import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManLiftingWeightsDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-lifting-weights-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManLiftingWeightsDarkSkinTone.displayName =
  'EmojiManLiftingWeightsDarkSkinTone'
EmojiManLiftingWeightsDarkSkinTone.defaultProps = {}

export default EmojiManLiftingWeightsDarkSkinTone
