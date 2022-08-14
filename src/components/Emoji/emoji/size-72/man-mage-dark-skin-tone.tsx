import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManMageDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-mage-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManMageDarkSkinTone.displayName = 'EmojiManMageDarkSkinTone'
EmojiManMageDarkSkinTone.defaultProps = {}

export default EmojiManMageDarkSkinTone
