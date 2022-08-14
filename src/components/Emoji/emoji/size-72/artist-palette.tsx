import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiArtistPalette = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-artist-palette"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiArtistPalette.displayName = 'EmojiArtistPalette'
EmojiArtistPalette.defaultProps = {}

export default EmojiArtistPalette
