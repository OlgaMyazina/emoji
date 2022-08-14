import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManCookMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-cook-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManCookMediumSkinTone.displayName = 'EmojiManCookMediumSkinTone'
EmojiManCookMediumSkinTone.defaultProps = {}

export default EmojiManCookMediumSkinTone
