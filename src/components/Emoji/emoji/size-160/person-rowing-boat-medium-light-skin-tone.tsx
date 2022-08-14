import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonRowingBoatMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-rowing-boat-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiPersonRowingBoatMediumLightSkinTone.displayName = 'EmojiPersonRowingBoatMediumLightSkinTone'
EmojiPersonRowingBoatMediumLightSkinTone.defaultProps = {}

export default EmojiPersonRowingBoatMediumLightSkinTone
