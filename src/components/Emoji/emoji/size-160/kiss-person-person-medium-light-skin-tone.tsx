import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKissPersonPersonMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiss-person-person-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKissPersonPersonMediumLightSkinTone.displayName = 'EmojiKissPersonPersonMediumLightSkinTone'
EmojiKissPersonPersonMediumLightSkinTone.defaultProps = {}

export default EmojiKissPersonPersonMediumLightSkinTone
