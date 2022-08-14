import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissWomanManMediumLightSkinToneLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-woman-man-medium-light-skin-tone-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKissWomanManMediumLightSkinToneLightSkinTone.displayName = 'EmojiKissWomanManMediumLightSkinToneLightSkinTone'
EmojiKissWomanManMediumLightSkinToneLightSkinTone.defaultProps = {}

export default EmojiKissWomanManMediumLightSkinToneLightSkinTone
