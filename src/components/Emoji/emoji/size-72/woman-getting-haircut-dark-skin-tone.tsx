import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanGettingHaircutDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-getting-haircut-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiWomanGettingHaircutDarkSkinTone.displayName = 'EmojiWomanGettingHaircutDarkSkinTone'
EmojiWomanGettingHaircutDarkSkinTone.defaultProps = {}

export default EmojiWomanGettingHaircutDarkSkinTone
