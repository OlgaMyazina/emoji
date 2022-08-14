import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManMageMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-mage-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManMageMediumLightSkinTone.displayName = 'EmojiManMageMediumLightSkinTone'
EmojiManMageMediumLightSkinTone.defaultProps = {}

export default EmojiManMageMediumLightSkinTone
