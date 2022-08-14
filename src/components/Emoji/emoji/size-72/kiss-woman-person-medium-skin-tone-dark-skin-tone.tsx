import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissWomanPersonMediumSkinToneDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-woman-person-medium-skin-tone-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKissWomanPersonMediumSkinToneDarkSkinTone.displayName = 'EmojiKissWomanPersonMediumSkinToneDarkSkinTone'
EmojiKissWomanPersonMediumSkinToneDarkSkinTone.defaultProps = {}

export default EmojiKissWomanPersonMediumSkinToneDarkSkinTone
