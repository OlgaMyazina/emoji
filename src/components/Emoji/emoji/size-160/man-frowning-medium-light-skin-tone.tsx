import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManFrowningMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-frowning-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManFrowningMediumLightSkinTone.displayName = 'EmojiManFrowningMediumLightSkinTone'
EmojiManFrowningMediumLightSkinTone.defaultProps = {}

export default EmojiManFrowningMediumLightSkinTone
