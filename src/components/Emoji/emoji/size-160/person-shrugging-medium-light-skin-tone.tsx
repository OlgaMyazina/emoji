import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonShruggingMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-shrugging-medium-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiPersonShruggingMediumLightSkinTone.displayName = 'EmojiPersonShruggingMediumLightSkinTone'
EmojiPersonShruggingMediumLightSkinTone.defaultProps = {}

export default EmojiPersonShruggingMediumLightSkinTone
