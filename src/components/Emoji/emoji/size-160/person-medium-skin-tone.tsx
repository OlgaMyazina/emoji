import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonMediumSkinTone.displayName = 'EmojiPersonMediumSkinTone'
EmojiPersonMediumSkinTone.defaultProps = {}

export default EmojiPersonMediumSkinTone
