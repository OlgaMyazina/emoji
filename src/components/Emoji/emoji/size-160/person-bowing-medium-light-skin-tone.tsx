import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonBowingMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-bowing-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiPersonBowingMediumLightSkinTone.displayName = 'EmojiPersonBowingMediumLightSkinTone'
EmojiPersonBowingMediumLightSkinTone.defaultProps = {}

export default EmojiPersonBowingMediumLightSkinTone
