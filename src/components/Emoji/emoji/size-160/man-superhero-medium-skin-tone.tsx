import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManSuperheroMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-superhero-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManSuperheroMediumSkinTone.displayName = 'EmojiManSuperheroMediumSkinTone'
EmojiManSuperheroMediumSkinTone.defaultProps = {}

export default EmojiManSuperheroMediumSkinTone
