import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiThumbsDownLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-thumbs-down-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiThumbsDownLightSkinTone.displayName = 'EmojiThumbsDownLightSkinTone'
EmojiThumbsDownLightSkinTone.defaultProps = {}

export default EmojiThumbsDownLightSkinTone
