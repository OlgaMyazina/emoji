import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonWalkingMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-walking-medium-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonWalkingMediumDarkSkinTone.displayName = 'EmojiPersonWalkingMediumDarkSkinTone'
EmojiPersonWalkingMediumDarkSkinTone.defaultProps = {}

export default EmojiPersonWalkingMediumDarkSkinTone
