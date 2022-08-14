import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissManMediumSkinToneWomanMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-man-medium-skin-tone-woman-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiKissManMediumSkinToneWomanMediumSkinTone.displayName = 'EmojiKissManMediumSkinToneWomanMediumSkinTone'
EmojiKissManMediumSkinToneWomanMediumSkinTone.defaultProps = {}

export default EmojiKissManMediumSkinToneWomanMediumSkinTone
