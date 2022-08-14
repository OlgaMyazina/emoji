import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanWearingTurbanMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-wearing-turban-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiWomanWearingTurbanMediumSkinTone.displayName = 'EmojiWomanWearingTurbanMediumSkinTone'
EmojiWomanWearingTurbanMediumSkinTone.defaultProps = {}

export default EmojiWomanWearingTurbanMediumSkinTone
