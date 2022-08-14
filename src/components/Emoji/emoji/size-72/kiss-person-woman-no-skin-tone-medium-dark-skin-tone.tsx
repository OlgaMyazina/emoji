import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissPersonWomanNoSkinToneMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-person-woman-no-skin-tone-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKissPersonWomanNoSkinToneMediumDarkSkinTone.displayName = 'EmojiKissPersonWomanNoSkinToneMediumDarkSkinTone'
EmojiKissPersonWomanNoSkinToneMediumDarkSkinTone.defaultProps = {}

export default EmojiKissPersonWomanNoSkinToneMediumDarkSkinTone
