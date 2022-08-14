import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManMediumSkinTone.displayName = 'EmojiManMediumSkinTone'
EmojiManMediumSkinTone.defaultProps = {}

export default EmojiManMediumSkinTone
