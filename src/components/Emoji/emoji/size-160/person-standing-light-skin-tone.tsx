import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonStandingLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-standing-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiPersonStandingLightSkinTone.displayName = 'EmojiPersonStandingLightSkinTone'
EmojiPersonStandingLightSkinTone.defaultProps = {}

export default EmojiPersonStandingLightSkinTone
