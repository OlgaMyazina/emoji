import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiDeafManMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-deaf-man-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiDeafManMediumLightSkinTone.displayName = 'EmojiDeafManMediumLightSkinTone'
EmojiDeafManMediumLightSkinTone.defaultProps = {}

export default EmojiDeafManMediumLightSkinTone
