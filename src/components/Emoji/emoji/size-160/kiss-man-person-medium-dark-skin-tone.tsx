import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissManPersonMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-man-person-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKissManPersonMediumDarkSkinTone.displayName = 'EmojiKissManPersonMediumDarkSkinTone'
EmojiKissManPersonMediumDarkSkinTone.defaultProps = {}

export default EmojiKissManPersonMediumDarkSkinTone
