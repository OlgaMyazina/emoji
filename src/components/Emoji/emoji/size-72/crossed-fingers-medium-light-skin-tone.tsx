import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCrossedFingersMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-crossed-fingers-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCrossedFingersMediumLightSkinTone.displayName = 'EmojiCrossedFingersMediumLightSkinTone'
EmojiCrossedFingersMediumLightSkinTone.defaultProps = {}

export default EmojiCrossedFingersMediumLightSkinTone
