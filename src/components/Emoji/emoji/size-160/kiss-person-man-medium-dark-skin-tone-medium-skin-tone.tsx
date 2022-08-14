import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissPersonManMediumDarkSkinToneMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-person-man-medium-dark-skin-tone-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKissPersonManMediumDarkSkinToneMediumSkinTone.displayName = 'EmojiKissPersonManMediumDarkSkinToneMediumSkinTone'
EmojiKissPersonManMediumDarkSkinToneMediumSkinTone.defaultProps = {}

export default EmojiKissPersonManMediumDarkSkinToneMediumSkinTone
