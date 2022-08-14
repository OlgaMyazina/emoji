import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiHorseRacingMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-horse-racing-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiHorseRacingMediumLightSkinTone.displayName = 'EmojiHorseRacingMediumLightSkinTone'
EmojiHorseRacingMediumLightSkinTone.defaultProps = {}

export default EmojiHorseRacingMediumLightSkinTone
