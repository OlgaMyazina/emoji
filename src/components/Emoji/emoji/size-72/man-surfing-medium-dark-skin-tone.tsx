import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManSurfingMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-surfing-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManSurfingMediumDarkSkinTone.displayName = 'EmojiManSurfingMediumDarkSkinTone'
EmojiManSurfingMediumDarkSkinTone.defaultProps = {}

export default EmojiManSurfingMediumDarkSkinTone
