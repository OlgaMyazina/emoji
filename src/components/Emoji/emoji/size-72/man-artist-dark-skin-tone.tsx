import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManArtistDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-artist-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManArtistDarkSkinTone.displayName = 'EmojiManArtistDarkSkinTone'
EmojiManArtistDarkSkinTone.defaultProps = {}

export default EmojiManArtistDarkSkinTone
