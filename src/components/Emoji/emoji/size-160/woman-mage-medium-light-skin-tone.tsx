import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanMageMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-mage-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiWomanMageMediumLightSkinTone.displayName = 'EmojiWomanMageMediumLightSkinTone'
EmojiWomanMageMediumLightSkinTone.defaultProps = {}

export default EmojiWomanMageMediumLightSkinTone
