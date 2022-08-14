import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonGettingMassageMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-getting-massage-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonGettingMassageMediumLightSkinTone.displayName = 'EmojiPersonGettingMassageMediumLightSkinTone'
EmojiPersonGettingMassageMediumLightSkinTone.defaultProps = {}

export default EmojiPersonGettingMassageMediumLightSkinTone
