import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManFirefighterDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-firefighter-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManFirefighterDarkSkinTone.displayName = 'EmojiManFirefighterDarkSkinTone'
EmojiManFirefighterDarkSkinTone.defaultProps = {}

export default EmojiManFirefighterDarkSkinTone
