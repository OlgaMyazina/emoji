import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanArtistMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-artist-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWomanArtistMediumLightSkinTone.displayName = 'EmojiWomanArtistMediumLightSkinTone'
EmojiWomanArtistMediumLightSkinTone.defaultProps = {}

export default EmojiWomanArtistMediumLightSkinTone
