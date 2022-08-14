import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonPlayingWaterPoloLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-playing-water-polo-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonPlayingWaterPoloLightSkinTone.displayName = 'EmojiPersonPlayingWaterPoloLightSkinTone'
EmojiPersonPlayingWaterPoloLightSkinTone.defaultProps = {}

export default EmojiPersonPlayingWaterPoloLightSkinTone
