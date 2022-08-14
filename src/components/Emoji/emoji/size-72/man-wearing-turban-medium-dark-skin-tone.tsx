import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManWearingTurbanMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-wearing-turban-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManWearingTurbanMediumDarkSkinTone.displayName = 'EmojiManWearingTurbanMediumDarkSkinTone'
EmojiManWearingTurbanMediumDarkSkinTone.defaultProps = {}

export default EmojiManWearingTurbanMediumDarkSkinTone
