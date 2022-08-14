import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanScientistMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-scientist-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiWomanScientistMediumLightSkinTone.displayName = 'EmojiWomanScientistMediumLightSkinTone'
EmojiWomanScientistMediumLightSkinTone.defaultProps = {}

export default EmojiWomanScientistMediumLightSkinTone
