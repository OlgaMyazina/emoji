import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManDancingMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-dancing-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManDancingMediumSkinTone.displayName = 'EmojiManDancingMediumSkinTone'
EmojiManDancingMediumSkinTone.defaultProps = {}

export default EmojiManDancingMediumSkinTone
