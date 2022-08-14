import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissManMediumDarkSkinToneWomanDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-man-medium-dark-skin-tone-woman-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKissManMediumDarkSkinToneWomanDarkSkinTone.displayName = 'EmojiKissManMediumDarkSkinToneWomanDarkSkinTone'
EmojiKissManMediumDarkSkinToneWomanDarkSkinTone.defaultProps = {}

export default EmojiKissManMediumDarkSkinToneWomanDarkSkinTone
