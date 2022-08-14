import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiScientistMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-scientist-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiScientistMediumLightSkinTone.displayName = 'EmojiScientistMediumLightSkinTone'
EmojiScientistMediumLightSkinTone.defaultProps = {}

export default EmojiScientistMediumLightSkinTone
